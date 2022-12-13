/**
 * Class to represent a MinHeap which is a Priority Queue optimized for fast
 * retrieval of the minimum value. It is implemented using an array but it is
 * best visualized as a tree structure where each 'node' has left and right
 * children except the 'node' may only have a left child.
 * - parent is located at: Math.floor(i / 2);
 * - left child is located at: i * 2
 * - right child is located at: i * 2 + 1
 */
class MinHeap {
    constructor() {
        /**
         * 0th index not used, so null is a placeholder. Not using 0th index makes
         * calculating the left and right children's index cleaner.
         * This also effectively makes our array start at index 1.
         */
        this.heap = [null];
    }

    /**
     * Extracts the min num from the heap and then re-orders the heap to
     * maintain order so the next min is ready to be extracted.
     * 1. Save the first node to a temp var.
     * 2. Pop last node off and set idx1 equal to the popped value.
     * 3. Iteratively swap the old last node that is now at idx1 with it's
     *    smallest child IF the smallest child is smaller than it.
     * - Time: O(log n) logarithmic due to shiftDown.
     * - Space: O(1) constant.
     * @returns {?number} The min number or null if empty.
     */
    extract() {
        let minValue = this.heap[1];    // saves first node to return later
        this.heap[1] = this.heap.pop(); // moves last node to top of heap

        // declaring variables to shift top node to correct spot
        // iterable
        let i = 1;  
        // variables to make logic a lot easier to read.
        let parentVal = this.heap[i];
        let leftVal = this.heap[this.idxOfLeftChild(i)];
        let rightVal = this.heap[this.idxOfRightChild(i)];

        // while both children are not undefined
        while (leftVal && rightVal) {
            // if parent is greater than either child
            if (parentVal > Math.min(leftVal, rightVal)) {
                // swaps parent with the lesser of either child, then iterates
                if (leftVal < rightVal) {
                    this.swap(i, this.idxOfLeftChild(i));
                    i = this.idxOfLeftChild(i);
                } else {
                    this.swap(i, this.idxOfRightChild(i));
                    i = this.idxOfRightChild(i);
                }
                // updates variables with new iterable
                parentVal = this.heap[i];
                leftVal = this.heap[this.idxOfLeftChild(i)];
                rightVal = this.heap[this.idxOfRightChild(i)];
            }
            // if both children are greater than or equal to parent, return the saved node
            else return minValue;
        }

        // edge case where at least one of last 2 children is undefined
        // if statement checks if tree large enough for children to exist
        if (i < Math.ceil(this.heap.length / 2)) {
            // if parent is greater than either existing child, swap
            if (parentVal > leftVal) this.swap(i, this.idxOfLeftChild(i));
            if (parentVal > rightVal) this.swap(i, this.idxOfLeftChild(i));
        }

        // returns saved node after heap is ordered
        return minValue;
    }

    /**
     * Retrieves the top (minimum number) in the heap without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {?number} Null if empty.
     */
    top() {
        return this.heap.length > 1 ? this.heap[1] : null;
    }

    /**
     * Inserts a new number into the heap and reorders heap to maintain order.
     * 1. Push new num to back.
     * 2. Iteratively swap the new num with it's parent while it is smaller than
     *    it's parent.
     * - Time: O(log n) logarithmic due to shiftUp.
     * - Space: O(1) constant.
     * @param {number} num The num to add.
     */
    insert(num) {
        this.heap.push(num);
        this.shiftUp();
        // .push on array returns the new length
        return this.heap.length - 1;
    }

    // AKA: siftUp, heapifyUp, bubbleUp to restore order after insert
    shiftUp() {
        let idxOfNodeToShiftUp = this.heap.length - 1;

        while (idxOfNodeToShiftUp > 1) {
            const idxOfParent = this.idxOfParent(idxOfNodeToShiftUp);

            const isParentSmallerOrEqual =
                this.heap[idxOfParent] <= this.heap[idxOfNodeToShiftUp];

            // Parent is supposed to be smaller so ordering is complete.
            if (isParentSmallerOrEqual) {
                break;
            }

            this.swap(idxOfNodeToShiftUp, idxOfParent);
            // after swapping the node is at idxOfParent now.
            idxOfNodeToShiftUp = idxOfParent;
        }
    }

    /**
     * @param {number} i
     */
    idxOfParent(i) {
        return Math.floor(i / 2);
    }

    /**
     * @param {number} i
     */
    idxOfLeftChild(i) {
        return i * 2;
    }

    /**
     * @param {number} i
     */
    idxOfRightChild(i) {
        return i * 2 + 1;
    }

    /**
     * Swaps two nodes.
     * @param {number} i
     * @param {number} j
     */
    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    /**
     * Logs the tree horizontally with the root on the left and the index in
     * parenthesis using reverse inorder traversal.
     */
    printHorizontalTree(parentIdx = 1, spaceCnt = 0, spaceIncr = 10) {
        if (parentIdx > this.heap.length - 1) {
            return;
        }

        spaceCnt += spaceIncr;
        this.printHorizontalTree(parentIdx * 2 + 1, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${this.heap[parentIdx]} (${parentIdx})`
        );

        this.printHorizontalTree(parentIdx * 2, spaceCnt);
    }
}

let treeness = new MinHeap();
treeness.insert(10);
treeness.insert(15);
treeness.insert(2);
treeness.insert(19);
treeness.insert(26);
treeness.insert(24);
treeness.insert(16);
treeness.insert(49);
treeness.insert(36);
treeness.insert(32);
treeness.insert(26);
treeness.insert(18);
treeness.printHorizontalTree();

let twoLayerHeap = new MinHeap();
twoLayerHeap.insert(3);
twoLayerHeap.insert(5);
twoLayerHeap.insert(9);

treeness.printHorizontalTree();
console.log(treeness.extract());
treeness.printHorizontalTree();
