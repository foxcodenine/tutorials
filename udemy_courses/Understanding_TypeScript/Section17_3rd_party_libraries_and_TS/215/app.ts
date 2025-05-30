// ---------------------------------------------------------------------
// 📦 Import External Libraries
// ---------------------------------------------------------------------

import _ from 'lodash';         // Utility functions (e.g., chunking arrays)
import fs from 'node:fs';       // Node.js File System API
import { z } from 'zod';        // Runtime validation and type inference

// ---------------------------------------------------------------------
// 🔢 Example 1: Use Lodash to Chunk an Array
// ---------------------------------------------------------------------

const numbers = [1, 2, 3, 4, 5, 6];

// Break the array into chunks of size 2
const chunkedArr = _.chunk(numbers, 2);

console.log('Chunked Array:', chunkedArr);
// Output: [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]

// ---------------------------------------------------------------------
// 🛡️ Example 2: Validate External JSON Using Zod
// ---------------------------------------------------------------------

// Define the expected shape of the JSON data
const dataSchema = z.object({
  title: z.string(),
  id: z.number(),
  values: z.array(z.union([z.string(), z.number()])), // mixed array of strings or numbers
});

// Infer the corresponding TypeScript type
type Data = z.infer<typeof dataSchema>;

try {
  // Read file content from 'data.json'
  const contentStr = fs.readFileSync('data.json', { encoding: 'utf8' });

  // Parse the raw JSON string into a JS object
  const content = JSON.parse(contentStr);
  console.log('Raw JSON Content:', content);

  // Validate the content against the schema
  const validatedData = dataSchema.parse(content); // throws if invalid

  // Process validated data
  output(validatedData);

} catch (error) {
  console.error('❌ Failed to read or validate data:', error);
}

// ---------------------------------------------------------------------
// 🔄 Output Function
// ---------------------------------------------------------------------

function output(data: Data): void {
  console.log('✅ Validated Data:', data);
}
