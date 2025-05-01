// ---------------------------------------------------------------------
// Using `satisfies` to enforce shape without losing exact types

// The object must satisfy the shape: Record<string, number>
// BUT the type of 'dataEntries' is NOT widened to just Record<string, number>,
// it retains its precise property names and types.

const dataEntries = {
    entry1: 0.51,
    entry2: -1.23
} satisfies Record<string, number>;

dataEntries.entry2 = 5; // ✅ allowed — entry2 exists and is a number
// dataEntries.entry3 = 15; // ❌ Error — entry3 is not declared

// ---------------------------------------------------------------------
// Without satisfies

const dataEntries2: Record<string, number> = {
    entry1: 0.51,
    entry2: -1.23,
};
dataEntries2.entry3 = 5;

// Now TypeScript allows: dataEntries2['anything'] = number; ❌ not ideal
