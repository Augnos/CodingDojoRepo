/**
 * Class to represent a stack using an array to store the stacked items.
 * Follows a LIFO (Last In First Out) order where new items are stacked on
 * top (back of array) and removed items are removed from the top / back.
 */
class Stack {
    /**
     * The constructor is executed when instantiating a new Stack() to construct
     * a new instance.
     * @returns {Stack} This new Stack instance is returned without having to
     *    explicitly write 'return' (implicit return).
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the top / back of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to be added to the top / back.
     * @returns {number} The new length of this stack.
     */
    push(item) {
        return this.items.push(item);
    }

    /**
     * Removes the top / last item from this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item or undefined if this stack was empty.
     */
    pop() {
        return this.items.pop();
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        return this.items[this.items.length - 1];
    }

    /**
     * Returns whether or not this stack is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items[0] == undefined ? true : false;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length();
    }
}


//BONUS: Do it with a linked list instead

class StackNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListStack {
    constructor() {
        this.head = null;
    }

    /**
     * Creates a new node with the given data and inserts it at the back of
     * this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @param {any} data The data to be added to the new node.
     * @returns {SinglyLinkedList} This list.
    */
    push(data) {
        const newBack = new StackNode(data);

        if (this.isEmpty()) {
            this.head = newBack;
            return this;
        }

        let runner = this.head;

        while (runner.next !== null) {
            runner = runner.next;
        }

        runner.next = newBack;
        return this;
    }

    /**
     * Removes the last node of this list.
     * - Time: O(n) linear, n = length of list.
     * - Space: O(1) constant.
     * @returns {any} The data from the node that was removed.
    */
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        // Only 1 node.
        if (this.head.next === null) {
            return this.removeHead();
        }

        // More than 1 node.
        let runner = this.head;

        while (runner.next.next) {
            runner = runner.next;
        }

        // after while loop finishes, runner is now at 2nd to last node
        const removedData = runner.next.data;
        runner.next = null; // remove it from list
        return removedData;
    }

    /**
     * Retrieves the top / last item from this stack without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The top / last item of this stack.
     */
    peek() {
        if (this.isEmpty()) {
            return null;
        }

        // Only 1 node.
        if (this.head.next === null) {
            return this.head.data;
        }

        let runner = this.head.next;
        while (runner.next) {
            runner = runner.next;
        }

        return runner.data;
    }

    /**
     * Determines if this list is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
    */
    isEmpty() {
        return this.head === null;
    }

    /**
     * Returns the size of this stack.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        let count = 0;
        if (this.isEmpty()) {
            return count;
        }

        count++;

        // Only 1 node.
        if (this.head.next === null) {
            return count;
        }

        let runner = this.head.next;
        while (runner) {
            runner = runner.next;
            count++;
        }

        return count;

    }

    /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
    */
    toArr() {
        const arr = [];
        let runner = this.head;

        while (runner) {
            arr.push(runner.data);
            runner = runner.next;
        }
        return arr;
    }
}


newStack = new LinkedListStack;
emptyStack = new LinkedListStack;


console.log(newStack.push(3));
console.log(newStack.push(5));
console.log(newStack.push(7));
console.log(newStack.push(3));
console.log(newStack.push(5));
console.log(newStack.push(7));
console.log(newStack.push(3));
console.log(newStack.push(5));
console.log(newStack.push(7));
console.log(newStack.pop());
console.log(newStack.peek());
console.log(newStack.isEmpty());
console.log(emptyStack.isEmpty());
console.log(newStack.size());