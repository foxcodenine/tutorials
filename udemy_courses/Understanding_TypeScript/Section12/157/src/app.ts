// =====================================
// SECTION – Custom Validation Decorators
// =====================================
//
// Goal: Create `@Required` and `@PositiveNumber` decorators
//       that add validation rules to class properties.
//
// Later, we'll validate form input using these rules.
// =====================================


// ------------------------------
// Interface to store validation rules
// ------------------------------
// Format: { ClassName: { propertyName: [rules] } }
interface ValidatorConfig {
    [className: string]: {
        [property: string]: string[]; // e.g., ['required', 'positive']
    };
}

// A global object to store all registered validators by class name
const registeredValidators: ValidatorConfig = {};


// ------------------------------
// @Required decorator
// ------------------------------
function Required(target: any, propName: string) {
    // Get the name of the class where the decorator is used
    const className = target.constructor.name;

    // Add or update the 'required' rule for the given property
    registeredValidators[className] = {
        ...registeredValidators[className], // Keep existing rules if any
        [propName]: ['required']            // Add or overwrite with 'required'
    };
}


// ------------------------------
// @PositiveNumber decorator
// ------------------------------
function PositiveNumber(target: any, propName: string) {
    const className = target.constructor.name;

    // Add or update the 'positive' rule for the given property
    registeredValidators[className] = {
        ...registeredValidators[className], // Keep existing rules if any
        [propName]: ['positive']            // Add or overwrite with 'positive'
    };
}

/*
📌 Explanation of what's happening:
 
  target.constructor.name   => Gets the class name (e.g., 'Course')
  ...registeredValidators[] => Keeps any existing validation rules for that class
  [propName]: ['rule']      => Adds or updates rules for the specific property
*/


// ------------------------------
// Function: validate()
// ------------------------------
// This function checks if an object follows all the validation rules
// registered using @Required and @PositiveNumber decorators.

function validate(obj: any): boolean {
    // Get the validation config for this class (e.g., 'Course')
    const className = obj.constructor.name;
    const classValidationRules = registeredValidators[className];

    // If no rules are registered for this class, assume it's valid
    if (!classValidationRules) {
        return true;
    }

    let isValid = true;

    // Loop through each property that has validation rules
    for (const propertyName in classValidationRules) {
        const propertyValidators = classValidationRules[propertyName];

        // Loop through each validator for the current property
        for (const validator of propertyValidators) {
            const value = obj[propertyName];

            switch (validator) {
                case 'required':
                    // Check that the value is not empty, null, or undefined
                    isValid = isValid && !!value;
                    break;
                case 'positive':
                    // Check that the value is a number greater than 0
                    isValid = isValid && typeof value === 'number' && value > 0;
                    break;
            }

            // Early exit: if one check fails, no need to continue
            if (!isValid) return false;
        }
    }

    return isValid;
}



// ------------------------------
// Class: Course
// ------------------------------
// Properties will be validated using our decorators
class Course {
    @Required
    title: string;

    @PositiveNumber
    price: number;

    constructor(t: string, p: number) {
        this.title = t;
        this.price = p;
    }
}


// ------------------------------
// DOM Form Handling
// ------------------------------
// Get the form element and handle submit event
const formEl = document.getElementById('app-form')! as HTMLFormElement;

formEl.addEventListener('submit', e => {
    e.preventDefault();

    // Get form input values
    const titleEl = document.getElementById('title') as HTMLInputElement;
    const priceEl = document.getElementById('price') as HTMLInputElement;

    const title = titleEl.value;
    const price = +priceEl.value; // Convert to number

    // Create a new Course instance with input values
    const newCourse = new Course(title, price);

    if (!validate(newCourse)) {
        alert('Invalid input, please try again!');
        return;
    }
    console.log(newCourse);
});
