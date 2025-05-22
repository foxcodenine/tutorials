import { autobind as Autobind } from "../decorators/autobind.js";
import { projectState } from "../state/project-state.js";
import * as Validation from "../util/validation.js";
import Component from "./base-component.js";


// ============================================================
// SECTION – UI COMPONENT: ProjectInput
// ============================================================


export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
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

    renderContent() { }

    private gatherUserInput(): [string, string, number] | void {
        const enteredTitle = this.titleInputElement.value;
        const enteredDescription = this.descriptionInputElement.value;
        const enteredPeople = this.peopleInputElement.value;

        const titleValid = Validation.validate({ value: enteredTitle, required: true, minLength: 5 });
        const descValid = Validation.validate({ value: enteredDescription, required: true, minLength: 5 });
        const peopleValid = Validation.validate({ value: +enteredPeople, required: true, min: 1 });

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

    @Autobind
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
