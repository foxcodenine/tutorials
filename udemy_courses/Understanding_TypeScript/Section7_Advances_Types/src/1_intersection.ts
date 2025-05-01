// ---------------------------------------------------------------------
// Intersection types using `&`

type FileData = {
    path: string;
    content: string;
}

type Status = {
    isOpen: boolean;
    errorMessage?: string; // optional
}

type DatabaseData = {
    connectionUrl: string;
    credentials: string;
}

// Combine FileData and Status into one type
type AccessedFileData = FileData & Status;

// Combine DatabaseData and Status into one type
type AccessedDatabase = DatabaseData & Status;

// ---------------------------------------------------------------------
// Equivalent using interfaces and `extends`

interface FileData1 {
    path: string;
    content: string;
}

interface Status1 {
    isOpen: boolean;
    errorMessage?: string;
}

// New interface inherits properties from both
interface AccessedFileData1 extends FileData1, Status1 {}

// ---------------------------------------------------------------------


/*
Summary:

    & (intersection types) combines multiple types into one.

    extends in interfaces achieves the same for object shapes.

    Both are useful when you need an object to satisfy multiple contracts (e.g., data + status).

*/