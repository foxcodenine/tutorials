namespace App {
    // ============================================================
    // SECTION – DECORATORS
    // ============================================================

    // Method decorator to autobind 'this' for event handlers
    export function autobind(_target: any, _methodName: string, descriptor: PropertyDescriptor) {
        const originalMethod = descriptor.value;

        const adjDescriptor: PropertyDescriptor = {
            configurable: true,
            get() {
                const boundFn = originalMethod.bind(this);
                return boundFn;
            }
        };

        return adjDescriptor;
    }

}