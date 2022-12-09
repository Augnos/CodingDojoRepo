/**
* Class to represent a Node in a Binary Search Tree (BST).
*/
class BSTNode {
    /**
    * Constructs a new instance of a BST node.
    * @param {number} data The integer to store in the node.
    */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
        */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
        */
        this.root = null;
    }

    /**
     * BFS order: horizontal rows top-down left-to-right.
     * Converts this BST into an array following Breadth First Search order.
     * Example on the fullTree var:
     * [25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90]
     * @param {Node} current The current node during the traversal of this tree.
     * @returns {Array<number>} The data of all nodes in BFS order.
     */
    toArrLevelorder(current = this.root) {
        let output = [];
        let queue = [current];  // current is placed as first node in queue

        while (queue[0]) {  // while the queue has a node in it
            // pushes data from first node in queue to output
            output.push(queue[0].data);

            // adds first node's .left and .right to back of queue, if they exist
            queue[0].left && queue.push(queue[0].left);
            queue[0].right && queue.push(queue[0].right);

            // removes first node in queue
            queue.shift();
        }

        return output;
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(node = this.root) {
        // empty trees return 0
        if (!node) return 0;

        // recursion
        let leftSize = 0, rightSize = 0;
        if (node.left) leftSize = this.size(node.left);
        if (node.right) rightSize = this.size(node.right);

        // base case
        return leftSize + rightSize + 1;
    }

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    height(node = this.root) {
        // empty trees return 0
        if (!node) return 0;

        // recursion
        let leftHeight = 0, rightHeight = 0;
        if (node.left) leftHeight = this.height(node.left);
        if (node.right) rightHeight = this.height(node.right);

        // base case
        return Math.max(leftHeight, rightHeight) + 1;
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) {
        // empty trees return false
        if (!node) return false;

        let fullSize = 0;
        // the variable "fullSize" is equivalent to size when tree is full at a given height
        // the for loop calculates fullSize with a series summation: 
        // height
        //   ∑  2^(n-1) = 2^0 + 2^1 + ... + 2^(height-1)
        //  n=1
        for (let i = 0; i < this.height(node); i++) {
            fullSize += Math.pow(2, i);
        }

        // returns true when this.size is equal to fullSize.
        return this.size(node) === fullSize;
    }

    /**
     * DFS Preorder: (CurrNode, Left, Right)
     * Converts this BST into an array following Depth First Search preorder.
     * Example on the fullTree var:
     * [25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90]
     * - Time: O(n) linear, every node is visited.
     * - Space: O(h + n) linear due to the call stack + vals array.
     * @param {BSTNode} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPreorder(node = this.root, vals = []) {
        if (node) {
            vals.push(node.data);
            this.toArrPreorder(node.left, vals);
            this.toArrPreorder(node.right, vals);
        }
        return vals;
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right)
     * Converts this BST into an array following Depth First Search inorder.
     * See debugger call stack to help understand the recursion.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * - Time: O(n) linear, every node is visited.
     * - Space: O(h + n) linear due to the call stack + vals array.
     * @param {BSTNode} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrInorder(node = this.root, vals = []) {
        if (node) {
            this.toArrInorder(node.left, vals);
            vals.push(node.data);
            this.toArrInorder(node.right, vals);
        }
        return vals;
    }

    /**
     * DFS Inorder: (Left, CurrNode, Right) using a stack instead of the recursive
     * call stack.
     * Converts this BST into an array following Depth First Search inorder.
     * Example on the fullTree var:
     * [4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90]
     * - Time: O(n) linear.
     * - Space: O(h + n) linear due to the stack + the vals array.
     * @param {BSTNode} node The current node during the traversal of this tree.
     * @returns {Array<number>} All node's data in DFS Preorder.
     */
    toArrInorderNonRecursive(node = this.root) {
        let current = node;
        const stack = [];
        const vals = [];

        while (true) {
            if (current !== null) {
                stack.push(current);
                current = current.left;
            } else if (stack.length > 0) {
                current = stack.pop();
                vals.push(current.data);
                current = current.right;
            } else {
                break;
            }
        }
        return vals;
    }

    /**
     * DFS Postorder (Left, Right, CurrNode)
     * Converts this BST into an array following Depth First Search postorder.
     * Example on the fullTree var:
     * [4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25]
     * - Time: O(n) linear, every node is visited.
     * - Space: O(h + n) linear due to the call stack + vals array.
     * @param {BSTNode} node The current node during the traversal of this tree.
     * @param {Array<number>} vals The data that has been visited so far.
     * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
     */
    toArrPostorder(node = this.root, vals = []) {
        if (node) {
            this.toArrPostorder(node.left, vals);
            this.toArrPostorder(node.right, vals);
            vals.push(node.data);
        }
        return vals;
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(h) linear, h = height of tree because the new node may have to
     *    be added at the bottom.
     * - Space: O(1) constant.
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {
        const node = new BSTNode(newVal);

        if (this.isEmpty()) {
            this.root = node;
            return this;
        }

        let current = this.root;

        while (true) {
            if (newVal <= current.data) {
                if (current.left === null) {
                    current.left = node;
                    return this;
                }

                current = current.left;
            } else {
                // newVal is greater than current.data
                if (current.right === null) {
                    current.right = node;
                    return this;
                }

                current = current.right;
            }
        }
    }

    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(h) linear, h = height of tree because the new node may have to
     *    be added at the bottom.
     * - Space: O(h) linear due to the call stack.
     * @param {number} newVal The data to be added to a new node.
     * @param {BSTNode} curr The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {BinarySearchTree} This tree.
     */
    insertRecursive(newVal, curr = this.root) {
        if (this.isEmpty()) {
            this.root = new BSTNode(newVal);
            return this;
        }

        if (newVal > curr.data) {
            if (curr.right === null) {
                curr.right = new BSTNode(newVal);
                return this;
            }
            return this.insertRecursive(newVal, curr.right);
        }

        if (curr.left === null) {
            curr.left = new BSTNode(newVal);
            return this;
        }
        return this.insertRecursive(newVal, curr.left);
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(h) linear, h = height of tree.
     * - Space: O(1) constant.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    contains(searchVal) {
        let current = this.root;

        while (current) {
            if (current.data === searchVal) {
                return true;
            }

            if (searchVal < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    /**
     * Determines if this tree contains the given searchVal.
     * - Time: O(h) linear, h = height of tree.
     * - Space: O(h) linear due to the call stack.
     * @param {number} searchVal The number to search for in the node's data.
     * @returns {boolean} Indicates if the searchVal was found.
     */
    containsRecursive(searchVal, current = this.root) {
        if (current === null) {
            return false;
        }

        if (current.data === searchVal) {
            return true;
        }

        if (searchVal < current.data) {
            return this.containsRecursive(searchVal, current.left);
        }

        if (searchVal > current.data) {
            return this.containsRecursive(searchVal, current.right);
        }
    }

    /**
     * Calculates the range (max - min) from the given startNode.
     * - Time: O(rightHeight + leftHeight) -> still linear so simplify to O(h).
     * - Space: O(h) linear due to the call stack. The max side finishes before
     *    the right min side is added to the stack.
     * @param {BSTNode} startNode The node to start from to calculate the range.
     * @returns {number|null} The range of this tree or a sub tree depending on if the
     *    startNode is the root or not.
     */
    range(startNode = this.root) {
        if (!startNode) {
            return null;
        }
        return this.max(startNode) - this.min(startNode);
    }

    /**
     * Determines if this tree is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() {
        return this.root === null;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) linear, h = height of left sub tree starting from current node.
     * - Space: O(1) constant.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    min(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.left) {
            current = current.left;
        }
        return current.data;
    }

    /**
     * Retrieves the smallest integer data from this tree.
     * - Time: O(h) linear, h = height of left sub tree starting from current node.
     * - Space: O(h) linear due to the call stack.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The smallest integer from this tree.
     */
    minRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.left === null) {
            return current.data;
        }
        return this.minRecursive(current.left);
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) linear, h = height of right sub tree starting from current node.
     * - Space: O(1) constant.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    max(current = this.root) {
        if (current === null) {
            return null;
        }

        while (current.right) {
            current = current.right;
        }
        return current.data;
    }

    /**
     * Retrieves the largest integer data from this tree.
     * - Time: O(h) linear, h = height of right sub tree starting from current node.
     * - Space: O(h) linear due to the call stack.
     * @param {BSTNode} current The node that is currently accessed from the tree as
     *    the tree is being traversed.
     * @returns {number} The largest integer from this tree.
     */
    maxRecursive(current = this.root) {
        if (current === null) {
            return null;
        }

        if (current.right === null) {
            return current.data;
        }
        return this.maxRecursive(current.right);
    }

    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);

/* twoLevelTree
    root
     10
    /   \
   5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);

/* threeLevelTree 
    root
      10
    /   \
    5     15
   / \    / \
  2   6  13  
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(6);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.left = new BSTNode(13);

/* fullTree
                 root
              <-- 25 -->
            /            \
          15             50
        /    \         /    \
      10     22      35     70
     /  \   /  \    /  \   /  \
    4   12 18  24  31  44 66  90
*/
/***************** Uncomment after insert method is created. ****************/
const fullTree = new BinarySearchTree();
fullTree.insert(25)
fullTree.insert(15)
fullTree.insert(10)
fullTree.insert(22)
fullTree.insert(4)
fullTree.insert(12)
fullTree.insert(18)
fullTree.insert(24)
fullTree.insert(50)
fullTree.insert(35)
fullTree.insert(70)
fullTree.insert(31)
fullTree.insert(44)
fullTree.insert(66)
fullTree.insert(90);

// console.log(emptyTree.size());
// console.log(oneNodeTree.size());
// console.log(twoLevelTree.size());
// console.log(threeLevelTree.size());
// console.log(fullTree.size());

// console.log(emptyTree.height());
// console.log(oneNodeTree.height());
// console.log(twoLevelTree.height());
// console.log(threeLevelTree.height());
// console.log(fullTree.height());

console.log(emptyTree.isFull());
console.log(oneNodeTree.isFull());
console.log(twoLevelTree.isFull());
console.log(threeLevelTree.isFull());
console.log(fullTree.isFull());