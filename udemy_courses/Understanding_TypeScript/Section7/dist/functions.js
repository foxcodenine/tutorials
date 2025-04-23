"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLength(val) {
    if (typeof val === 'string') {
        const numberOfWords = val.split(' ');
        return `${numberOfWords} words`;
    }
    return val.length;
}
const numberOfWords = getLength('Does this work!');
const numberOfItems = getLength(['cooking', 'running']);
console.log(numberOfWords);
console.log(numberOfItems);
//# sourceMappingURL=functions.js.map