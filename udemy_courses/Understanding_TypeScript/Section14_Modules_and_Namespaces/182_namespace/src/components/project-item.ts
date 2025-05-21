/// <reference path="base-component.ts" />

/// <reference path="../decorators/autobind.ts" />
/// <reference path="../models/project.ts" />
/// <reference path="../models/drag-drop.ts" />



namespace App {
    export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
        private project: Project

        constructor(hostID: string, project: Project) {
            super('single-project', hostID, false, project.id)
            this.project = project;

            this.configure();
            this.renderContent();
        }

        @autobind
        dragStartHandler(event: DragEvent): void {
            event.dataTransfer!.setData('text/plain', this.project.id);
            event.dataTransfer!.effectAllowed = 'move';
        }

        @autobind
        dragEndHandler(_: DragEvent): void {
            console.log('DragEnd');
        }

        configure(): void {
            this.element.addEventListener('dragstart', this.dragStartHandler)
            this.element.addEventListener('dragend', this.dragEndHandler)
        }

        get persons() {
            if (this.project.people === 1) {
                return '1 person';
            } else {
                return `${this.project.people} persons`;
            }
        }

        renderContent(): void {
            const h2El = this.element.querySelector('h2')!;
            const h3El = this.element.querySelector('h3')!;
            const pEl = this.element.querySelector('p')!;

            h2El.textContent = this.project.title;
            h3El.textContent = this.persons + ' assigned';
            pEl.textContent = this.project.description;
        }
    }
}