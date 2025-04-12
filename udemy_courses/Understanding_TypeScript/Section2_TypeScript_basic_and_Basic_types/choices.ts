// Enum
enum Role {
    Admin = 1, 
    Editor,
    Guest
}

let userRole: Role = 3;

userRole = Role.Editor;

userRole = Role.Guest; 

userRole = 1;

// ---------------------------------------------------------------------

let bread: 'breadsrick' | 'pretzel' | 'baguette' = 'baguette';
bread = 'pretzel';

// ---------------------------------------------------------------------

let possibleResults2: [1 | -1 , number];

possibleResults2 = [ -1 , 2 ];

// ---------------------------------------------------------------------
// Types


type Pizza = 'neapolitana' | 'sicilian' | 'romana' | 'greek';

function favoritePizza(p: Pizza):string {
    return `My favorite pizza is ${p}`;
}

type PizzaRecipe = {
    name: Pizza,
    ingredients: string[],
    size: number,
}


