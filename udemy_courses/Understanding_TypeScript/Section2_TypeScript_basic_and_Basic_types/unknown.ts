function process(val: unknown) {
    // Check if val is a non-null object with a 'log' method
    if (
        typeof val === 'object' &&      // Ensure val is an object
        !!val &&                        // Ensure val is not null
        'log' in val &&                 // Check for 'log' property
        typeof val.log === 'function'   // Confirm 'log' is a function
    ) {
        val.log(); // Call the log function
    }
}