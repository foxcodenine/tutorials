import { Project, ProjectStatus } from "../models/project.js";

// ============================================================
// SECTION – STATE MANAGEMENT (Singleton + Listener Pattern)
// ============================================================


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
export class ProjectState extends State<Project> {
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
export const projectState = ProjectState.getInstance();


