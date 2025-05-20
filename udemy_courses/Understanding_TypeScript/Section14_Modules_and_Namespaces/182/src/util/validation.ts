namespace App {
        // ============================================================
    // SECTION – VALIDATION LOGIC
    // ============================================================

    // Interface describing a validatable input
    type Validatable = {
        value: string | number;
        required: boolean;
        minLength?: number;
        maxLength?: number;
        min?: number;
        max?: number;
    };

    // Function to validate based on the Validatable rules
    export function validate(validatableInput: Validatable): boolean {
        let isValid = true;
        const { value, required, minLength, maxLength, min, max } = validatableInput;

        if (typeof value === 'string') {
            if (required != null) {
                isValid = isValid && value.trim().length !== 0;
            }
            if (minLength != null) {
                isValid = isValid && value.trim().length >= minLength;
            }
            if (maxLength != null) {
                isValid = isValid && value.trim().length <= maxLength;
            }
        }

        if (typeof value === 'number') {
            if (required != null) {
                isValid = isValid && value !== null;
            }
            if (min != null) {
                isValid = isValid && value >= min;
            }
            if (max != null) {
                isValid = isValid && value <= max;
            }
        }

        return isValid;
    }
}