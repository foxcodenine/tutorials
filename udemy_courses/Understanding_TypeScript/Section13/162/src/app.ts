// -----------------------------------------------------------
// STATE MANAGEMENT (Singleton + Listener Pattern)
// -----------------------------------------------------------
class ProjectState {
    private listeners: any[] = [];
    private projects: any[] = [];
    private static instance: ProjectState

    constructor() { }

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProjectState();
        }

        return this.instance;
    }

    addListener(listenerFn: Function) {
        this.listeners.push(listenerFn);
    }

    addProject(title: string, description: string, numOfPeople: number) {
        const newProject = {
            id: Math.random().toString(),
            title: title,
            description,
            people: numOfPeople,
        }

        this.projects.push(newProject);

        for (const listenerFn of this.listeners) {
            listenerFn(this.projects.slice());
        }
    }
}

const projectState = ProjectState.getInstance();


// -----------------------------------------------------------
// DECORATORS
// -----------------------------------------------------------

// autobind decorator
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


// -----------------------------------------------------------
// VALIDATION
// -----------------------------------------------------------

type Validatable = {
    value: string | number,
    required: boolean,
    minLength?: number,
    maxLength?: number,
    min?: number,
    max?: number,
}

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


// -----------------------------------------------------------
// UI: ProjectList
// -----------------------------------------------------------

class ProjectList {
    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    sectionElement: HTMLElement;
    assignedProjects: any[];

    constructor(private type: 'active' | 'finished') {
        this.templateElement = document.getElementById('project-list')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;
        this.assignedProjects = [];

        const importedNode = document.importNode(this.templateElement.content, true);

        this.sectionElement = importedNode.firstElementChild as HTMLElement;
        this.sectionElement.id = `${this.type}-projects`;

        projectState.addListener((projects: any[])=>{
            this.assignedProjects = projects;
            this.renderProjects();
        });

        this.attach();
        this.renderContent();
    }

    private renderProjects() {
        const listEl = document.getElementById(`${this.type}-project-list`)! as HTMLUListElement;
        for (const prjItem of this.assignedProjects) {
            const listItem = document.createElement('li');
            listItem.textContent = prjItem.title;
            listEl.appendChild(listItem);
        }
    }

    private attach() {
        this.hostElement.insertAdjacentElement('beforeend', this.sectionElement);
    }

    private renderContent() {
        this.sectionElement.querySelector('h2')!.textContent = this.type.toUpperCase() + ' PROJECTS';

        const listId = `${this.type}-project-list`;
        this.sectionElement.querySelector('ul')!.id = listId;
    }
}


// -----------------------------------------------------------
// UI: ProjectInput
// -----------------------------------------------------------

class ProjectInput {

    templateElement: HTMLTemplateElement;
    hostElement: HTMLDivElement;
    formElement: HTMLFormElement;

    titleInputElement: HTMLInputElement;
    descriptionInputElement: HTMLInputElement;
    peopleInputElement: HTMLInputElement;

    // ---------------------------------

    constructor() {
        this.templateElement = document.getElementById('project-input')! as HTMLTemplateElement;
        this.hostElement = document.getElementById('app')! as HTMLDivElement;


        const importedNode = document.importNode(this.templateElement.content, true);
        this.formElement = importedNode.firstElementChild as HTMLFormElement;
        this.formElement.id = 'user-input';

        this.titleInputElement = this.formElement.querySelector('#title') as HTMLInputElement;
        this.descriptionInputElement = this.formElement.querySelector('#description') as HTMLInputElement;
        this.peopleInputElement = this.formElement.querySelector('#people') as HTMLInputElement;

        this.configure();
        this.attach();
    }

    // ---------------------------------

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

    // ---------------------------------

    private configure() {
        this.formElement.addEventListener('submit', this.submitHandler);
    }

    // ---------------------------------

    private attach() {
        this.hostElement.insertAdjacentElement('afterbegin', this.formElement);
    }
}

const prjInput = new ProjectInput();
const activePrjects = new ProjectList('active');
const finishedProjects = new ProjectList('finished');
