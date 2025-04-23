// ---------------------------------------------------------------------
// Index types

type DataStore = {
    [props: string]: number | boolean;
}

let store: DataStore = {}

store.id = 5;
store.isOpen = false;
// store.name = 'Max';

// ---------------------------------------------------------------------
// Record Type
let someObj: Record<string, number | boolean>
// which is the same as above

// ---------------------------------------------------------------------
// IConstant types

let roles = ['admin', 'guest', 'editor'] as const;
// roles.push('max')
const firstRole = roles[0];

// ---------------------------------------------------------------------

