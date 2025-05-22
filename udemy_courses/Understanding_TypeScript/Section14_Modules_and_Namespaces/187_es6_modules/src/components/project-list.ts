import { autobind as Autobind } from "../decorators/autobind.js";
import { type DragTarget } from "../models/drag-drop.js";
import { Project, ProjectStatus } from "../models/project.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from "./project-item.js";
import Component from "./base-component.js";


// ============================================================
// SECTION – UI COMPONENT: ProjectList
// ============================================================



export class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @Autobind
    dragOverHandler(_event: DragEvent): void {
        if (_event.dataTransfer && _event.dataTransfer.types[0] === 'text/plain') {
            _event.preventDefault();

            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add("droppable");
        }
    }

    @Autobind
    dropHandler(_event: DragEvent): void {
        console.log('dropHandler');

        const prjID = _event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjID, this.type === 'active' ? ProjectStatus.active : ProjectStatus.finished);
    }

    @Autobind
    dragLeaveHandler(_event: DragEvent): void {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove("droppable");
    }

    configure() {
        this.element.addEventListener("dragover", this.dragOverHandler);
        this.element.addEventListener("dragleave", this.dragLeaveHandler);
        this.element.addEventListener("drop", this.dropHandler);

        projectState.addListener((projects: Project[]) => {
            projects = projects.filter((project: Project) => {
                return project.status == ProjectStatus[this.type];
            });

            this.assignedProjects = projects;
            this.renderProjects();
        });
    }

    renderContent() {
        this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';

        const listId = `${this.type}-project-list`;
        this.element.querySelector('ul')!.id = listId;
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;
        listEl.innerHTML = '';
        for (const prjItem of this.assignedProjects) {
            new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
        }
    }
}
