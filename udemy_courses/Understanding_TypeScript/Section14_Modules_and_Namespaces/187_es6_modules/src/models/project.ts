
// Enum to define project states
export enum ProjectStatus {
    active,
    finished
}

// Project model class
export class Project {
    constructor(
        public id: string,
        public title: string,
        public description: string,
        public people: number,
        public status: ProjectStatus
    ) { }
}
