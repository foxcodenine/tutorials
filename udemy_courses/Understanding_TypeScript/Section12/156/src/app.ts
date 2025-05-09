// =====================================
// SECTION – Autobind Method Decorator
// =====================================
//
// A method decorator that ensures the `this` context is always bound
// to the class instance, even when the method is passed around.

function Autobind(
    _target: any,
    _methodName: string | symbol,
    descriptor: PropertyDescriptor
): PropertyDescriptor {
    // Save the original method
    const originalMethod = descriptor.value;

    // Create an adjusted descriptor with a getter
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false, // keep it out of for-in loops

        // When the method is accessed (e.g., button.onclick = p.showMessage),
        // this getter runs and returns a *bound* version of the method.
        get() {
            // Binds the method to the current instance (the object this is called on)
            const boundFn = originalMethod.bind(this);
            return boundFn;
        }
    };

    // Return the new descriptor, replacing the old one
    return adjDescriptor;
}

// ------------------------------
// USAGE EXAMPLE
// ------------------------------
class Printer {
    message = 'This works';

    @Autobind
    showMessage() {
        console.log(this.message);
    }
}

const p = new Printer();

// Without autobind, `this` would be `undefined` in strict mode,
// because the method is called as a callback.
const button = document.getElementById('btn');
button?.addEventListener('click', p.showMessage);
// Always logs "This works", because `showMessage` is bound to `p`.