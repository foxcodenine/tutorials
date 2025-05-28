import _ from 'lodash';
import fs from 'node:fs';
import { z } from 'zod';
// ---------------------------------------------------------------------
const number = [1, 2, 3, 4, 5, 6];
// split that into multiple arrays
const chunkedArr = _.chunk(number, 2);
console.log(chunkedArr); // [ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ] ]
// ---------------------------------------------------------------------
const dataSchema = z.object({
    title: z.string(),
    id: z.number(),
    values: z.array(z.union([z.string(), z.number()]))
});
const contentStr = fs.readFileSync('data.json', { encoding: 'utf8', flag: 'r' });
const content = JSON.parse(contentStr);
console.log(content);
dataSchema.parse(content);
//# sourceMappingURL=app.js.map