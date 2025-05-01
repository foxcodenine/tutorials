"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Node in the linked list, holding a value and a reference to the next node
class ListNode {
    value;
    next; // Pointer to the next node (undefined if tail)
    constructor(value) {
        this.value = value;
    }
}
// Singly linked list implementation
class LinkedList {
    root; // First node in the list
    tail; // Last node in the list
    length = 0; // Number of nodes
    // Add a new value to the end of the list
    add(value) {
        const node = new ListNode(value); // Create a new node
        if (!this.root || !this.tail) { // If list is empty
            this.root = node; // New node is both root...
            this.tail = node; // ...and tail
        }
        else {
            this.tail.next = node; // Link old tail to new node
            this.tail = node; // Update tail to new node
        }
        this.length++; // Increase size count
    }
    // Insert a new value at zero-based position `pos` in the list.
    // Returns true if the value was inserted; false if `pos` is out of range.
    insertAt(value, pos) {
        // Only proceed for valid positions (0 <= pos < length) on a non-empty list
        if (pos > -1 && pos < this.length && this.root) {
            const node = new ListNode(value); // Create a new node to insert
            let current = this.root; // Start traversal from the head
            let previous = current; // Will lag one step behind `current`
            let index = 0; // Track current index during traversal
            // Case 1: inserting at the head of the list
            if (pos === 0) {
                node.next = this.root; // Point new node's next to old head
                this.root = node; // Update head to the new node
            }
            else {
                // Case 2: inserting somewhere after the head
                // Move `current` forward until it reaches the node at index `pos`
                while (index++ < pos && current.next) {
                    previous = current; // `previous` follows behind
                    current = current.next; // Advance `current`
                }
                // Splice in the new node:
                node.next = current; // New node points to current node
                previous.next = node; // Previous node now links to new node
            }
            this.length++; // Increase list size
            return true; // Indicate success
        }
        else {
            return false; // Invalid pos: nothing changed
        }
    }
    // Remove and return the node at zero-based position `pos`.
    // Returns the removed node, or null if `pos` is out of range.
    removeAt(pos) {
        // Only proceed for valid positions (0 <= pos < length) on a non-empty list
        if (pos > -1 && pos < this.length && this.root) {
            let current = this.root; // Start at the head
            let previous = current; // Will lag behind `current`
            let index = 0; // Track index during traversal
            // Case 1: removing the head (pos === 0)
            if (pos === 0) {
                this.root = current.next; // Update head to the next node
            }
            else {
                // Case 2: removing a node after the head
                // Advance to the node at index `pos`
                while (index++ < pos && current.next) {
                    previous = current; // Move previous forward
                    current = current.next; // Move current forward
                }
                // Unlink the `current` node from the list
                previous.next = current.next; // Skip over the removed node
            }
            this.length--; // Decrease list size
            return current; // Return the removed node
        }
        else {
            return null; // Invalid pos: nothing removed
        }
    }
    // Get current number of elements in the list
    getNumberOfElements() {
        return this.length;
    }
    // Print all values in the list to the console
    print() {
        let current = this.root;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }
}
// --- Example usage ---
const numberList = new LinkedList();
numberList.add(10); // Add 10 at end
numberList.add(5); // Add 5 at end
numberList.add(-3); // Add -3 at end
console.log('Length: ' + numberList.getNumberOfElements()); // Should be 3
numberList.print(); // Logs: 10, 5, -3
console.log('--- NOW REMOVING INDEX 1 ---');
numberList.removeAt(1); // Remove value at index 1 (5)
console.log('Length: ' + numberList.getNumberOfElements()); // Should be 2
numberList.print(); // Logs: 10, -3
console.log('--- NOW INSERTING AT INDEX 1 ---');
numberList.insertAt(100, 1); // Insert 100 at index 1
console.log('Length: ' + numberList.getNumberOfElements()); // Should be 3
numberList.print(); // Logs: 10, 100, -3
const nameList = new LinkedList(); // New list for strings
//# sourceMappingURL=linked-list.js.map