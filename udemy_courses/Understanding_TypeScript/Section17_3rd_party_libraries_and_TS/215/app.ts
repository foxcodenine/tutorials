// ---------------------------------------------------------------------
// Import External Libraries
// ---------------------------------------------------------------------

import _ from 'lodash';         // Utility library (used here for chunking arrays)
import fs from 'node:fs';       // Node.js file system module
import { z } from 'zod';        // Type-safe runtime validation library

// ---------------------------------------------------------------------
// Sample: Use Lodash to Chunk an Array
// ---------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

// Break the array into chunks of size 2
const chunkedArr = _.chunk(numbers, 2);

console.log('Chunked Array:', chunkedArr);
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

// ---------------------------------------------------------------------
// Sample: Validate External JSON Using Zod
// ---------------------------------------------------------------------

// Define a schema using Zod to describe the expected data shape
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()])), // array of strings OR numbers
});

// Read file content from 'data.json'
const contentStr = fs.readFileSync('data.json', { encoding: 'utf8' });

// Parse JSON content
const content = JSON.parse(contentStr);
console.log('Raw JSON Content:', content);

// Validate and parse the content using Zod schema
// If the data is invalid, Zod will throw an error
dataSchema.parse(content); // ✅ safe and type-checked at runtime
