// Enum with custom starting value
enum Role {
    Admin = 1,  // starting at 1
    Editor,     // 2
    Guest       // 3
}

let userRole: Role = 3;  // numeric assignment

userRole = Role.Editor;  // assign enum member
userRole = Role.Guest;   // assign enum member 
userRole = 1;            // assign numeric equivalent

// ---------------------------------------------------------------------

// Literal union for bread types
let bread: 'breadsrick' | 'pretzel' | 'baguette' = 'baguette';
bread = 'pretzel';

// ---------------------------------------------------------------------

// Tuple: first element must be 1 or -1, second is a number
let possibleResults2: [1 | -1, number];
possibleResults2 = [ -1, 2 ];

// ---------------------------------------------------------------------
// Types

// Union type for pizzas
type Pizza = 'neapolitana' | 'sicilian' | 'romana' | 'greek';

// Function using Pizza type
function favoritePizza(p: Pizza): string {
    return `My favorite pizza is ${p}`;
}

// Object type for pizza recipes
type PizzaRecipe = {
    name: Pizza,
    ingredients: string[],
    size: number,
}
