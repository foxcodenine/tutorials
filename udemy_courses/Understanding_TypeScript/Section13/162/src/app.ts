// ============================================================
// SECTION – Drag & Drop Interfaces
// ============================================================

// Interface to be implemented by draggable elements (like <li> items)
interface Draggable {
    // Called when drag operation starts
    dragStartHandler(event: DragEvent): void;

    // Called when drag operation ends (drop or cancel)
    dragEndHandler(event: DragEvent): void;
}

// Interface to be implemented by valid drop targets (like <ul> containers)
interface DragTarget {
    // Signals to the browser that the item can be dropped here
    // (must call preventDefault on the event to allow dropping)
    dragOverHandler(event: DragEvent): void;

    // Reacts when the draggable item is actually dropped
    dropHandler(event: DragEvent): void;

    // Called when a dragged item leaves the target area (used for visual feedback)
    dragLeaveHandler(event: DragEvent): void;
}


// ============================================================
// SECTION – STATE MANAGEMENT (Singleton + Listener Pattern)
// ============================================================


// Enum to define project states
enum ProjectStatus {
    active,
    finished
}

// Project model class
class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) {}
}

// Type alias for listener function
type Listener<T> = (items: T[]) => void;

// Generic base state class to manage listeners
class State<T> {
    protected listeners: Listener<T>[] = [];

    addListener(listenerFn: Listener<T>) {
        this.listeners.push(listenerFn);
    }
}

// Singleton state class to manage projects
class ProjectState extends State<Project> {
    private projects: Project[] = [];
    private static instance: ProjectState;

    private constructor() {
        super();
    }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectState();
        }
        return this.instance;
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = new Project(
            Math.random().toString(),
            title,
            description,
            numOfPeople,
            ProjectStatus.active
        );

        this.projects.push(newProject);
        this.updateListeners();
    }

    moveProject(projectID: string, newStatus: ProjectStatus) {
        const project = this.projects.find(prj => prj.id === projectID);

        if (project && project.status !== newStatus) {
            project.status = newStatus;
            this.updateListeners();
        }
    }
    private updateListeners() {
        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

// Global instance of the project state
const projectState = ProjectState.getInstance();


// ============================================================
// SECTION – DECORATORS
// ============================================================

// Method decorator to autobind 'this' for event handlers
function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    return adjDescriptor;
}


// ============================================================
// SECTION – VALIDATION LOGIC
// ============================================================

// Interface describing a validatable input
type Validatable = {
    value: string | number;
    required: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number;
};

// Function to validate based on the Validatable rules
function validate(validatableInput: Validatable): boolean {
    let isValid = true;
    const { value, required, minLength, maxLength, min, max } = validatableInput;

    if (typeof value === 'string') {
        if (required != null) {
            isValid = isValid && value.trim().length !== 0;
        }
        if (minLength != null) {
            isValid = isValid && value.trim().length >= minLength;
        }
        if (maxLength != null) {
            isValid = isValid && value.trim().length <= maxLength;
        }
    }

    if (typeof value === 'number') {
        if (required != null) {
            isValid = isValid && value !== null;
        }
        if (min != null) {
            isValid = isValid && value >= min;
        }
        if (max != null) {
            isValid = isValid && value <= max;
        }
    }

    return isValid;
}


// ============================================================
// SECTION – BASE COMPONENT CLASS
// ============================================================

abstract class Component<T extends HTMLElement, U extends HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;

    constructor(templateId: string, hostElementId: string, insertAtBeginning: boolean, newElementId?: string) {
        this.templateElement = document.getElementById(templateId)! as HTMLTemplateElement;
        this.hostElement = document.getElementById(hostElementId)! as T;

        const importedNode = document.importNode(this.templateElement.content, true);
        this.element = importedNode.firstElementChild as U;

        if (newElementId) {
            this.element.id = newElementId;
        }

        this.attach(insertAtBeginning);
    }

    private attach(insertAtBeginning: boolean) {
        const position = insertAtBeginning ? 'afterbegin' : 'beforeend';
        this.hostElement.insertAdjacentElement(position, this.element);
    }

    abstract configure(): void;
    abstract renderContent(): void;
}


// ============================================================
// SECTION – UI COMPONENT: ProjectList
// ============================================================

class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable {
    private project: Project

    constructor(hostID: string, project: Project){
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
class ProjectList extends Component<HTMLDivElement, HTMLElement> implements DragTarget {
    assignedProjects: Project[];

    constructor(private type: 'active' | 'finished') {
        super('project-list', 'app', false, `${type}-projects`);
        this.assignedProjects = [];

        this.configure();
        this.renderContent();
    }

    @autobind
    dragOverHandler(_event: DragEvent): void {
        if (_event.dataTransfer && _event.dataTransfer.types[0] === 'text/plain') {
            _event.preventDefault();

            const listEl = this.element.querySelector('ul')!;
            listEl.classList.add("droppable");
        }
    }

    @autobind
    dropHandler(_event: DragEvent): void {
        console.log('dropHandler');

        const prjID = _event.dataTransfer!.getData('text/plain');
        projectState.moveProject(prjID, this.type === 'active' ? ProjectStatus.active : ProjectStatus.finished);
    }

    @autobind
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


// ============================================================
// SECTION – UI COMPONENT: ProjectInput
// ============================================================

class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    constructor() {
        super('project-input', 'app', true, 'user-input');

        this.titleInputElement = this.element.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.element.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.element.querySelector('#people') as HTMLInputElement;

        this.configure();
    }

    configure() {
        this.element.addEventListener('submit', this.submitHandler);
    }

    renderContent() {}

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValid = validate({ value: enteredTitle, required: true, minLength: 5 });
        const descValid = validate({ value: enteredDescription, required: true, minLength: 5 });
        const peopleValid = validate({ value: +enteredPeople, required: true, min: 1 });

        if (!titleValid || !descValid || !peopleValid) {
            alert('Invalid input, please try again!');
            return;
        }

        return [enteredTitle, enteredDescription, +enteredPeople];
    }

    private clearInputs() {
        this.titleInputElement.value = '';
        this.descriptionInputElement.value = '';
        this.peopleInputElement.value = '';
    }

    @autobind
    private submitHandler(event: Event) {
        event.preventDefault();
        const userInput = this.gatherUserInput();

        if (Array.isArray(userInput)) {
            const [title, desc, people] = userInput;

            projectState.addProject(title, desc, people);
            this.clearInputs();
        }
    }
}


// ============================================================
// SECTION – APP INITIALIZATION
// ============================================================

const prjInput = new ProjectInput();
const activeProjects = new ProjectList('active');
const finishedProjects = new ProjectList('finished');
