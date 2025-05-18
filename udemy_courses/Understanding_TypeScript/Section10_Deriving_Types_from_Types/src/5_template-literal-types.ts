// ---------------------------------------------------------------------
// 🧠 What Are Template Literal Types?
//
// Template literal types let you build new string literal types by combining
// other string types, using the same `${}` syntax as JavaScript strings.
//
// Use cases:
// - Combine enums, keys, and patterns to create descriptive types.
// - Create event names like "nameChanged", "statusUpdated", etc.
//
// ---------------------------------------------------------------------

// JavaScript-style string interpolation
const mainUserName = 'Max';
const greeting = `Hi there, ${mainUserName}`; // 'Hi there, Max'

// ---------------------------------------------------------------------
// Combine two string literal unions using template literals

type ReadPermissions = 'no-read' | 'read';
type WritePermissions = 'no-write' | 'write';

// Combine read and write permissions into all possible combinations
type FilePermissions = `${ReadPermissions}-${WritePermissions}`;
// Resulting type:
// "no-read-no-write" | "no-read-write" | "read-no-write" | "read-write"

// ---------------------------------------------------------------------
// Use template literals with keyof types

type DataFile = {
    data: string;
    permissions: FilePermissions;
};

// Create a union of: "dataChanged" | "permissionsChanged"
type DataFileEventName = `${keyof DataFile}Changed`;


// Create an event object type with those keys
type DataFileEvent = {
    [Key in DataFileEventName]: () => void;
};

// Result:
// type DataFileEvent = {
//     dataChanged: () => void;
//     permissionsChanged: () => void;
// };
