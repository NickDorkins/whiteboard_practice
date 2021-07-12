class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
// -----------------Binary Search Tree--------------------

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    // -----------------INSERT--------------------
    insert(value) {
        // console.log("INSERT VALUE", value)
        let newNode = new Node(value);
        // console.log("NEWNODE", newNode)
        if (this.root === null) {
            this.root = newNode;
            // console.log("NULL", typeof(this.root))
            return this;
        } else {
            let current = this.root;
            // console.log("ROOT", current)
            while (true) {
                // console.log("BST ROOT", this.root)
                // console.log("BST ROOT RIGHT", this.root.right)
                // console.log("BST ROOT LEFT", this.root.left)
                if (value === current.value) return undefined;
                if (value < current.value) {
                    if (current.left === null) {
                        current.left = newNode;
                        return this;
                    } else {
                        current = current.left;
                    }
                } else {
                    if (current.right === null) {
                        // console.log("CURRENT.RIGHT NULL", current.right)
                        current.right = newNode;
                        // console.log("CURRENT.RIGHT", current.right)
                        return this;
                    } else {
                        current = current.right;
                    }
                }
            }
        }
    }

    // -----------------FIND--------------------
    find(value) {
        // console.log("FIND VALUE", value)
        if (this.root === null) return "Error, no data to assess!";
        let lowCompare = this.root;
        let highCompare = this.root;
        let current = this.root
        let found = false
        // console.log("FIND FIRST CURRENT", current.value)
        // console.log("FIND FIRST FOUND", found)
        // console.log("FIND FIRST HIGH", highCompare.value)
        // console.log("FIND FIRST LOW", lowCompare.value)

        //   console.log("Current = ", current)
        while (current && !found) {
            // console.log("CURRENT INSIDE WHILE", current.value)
            // console.log("FOUND INSIDE WHILE", found)
            if (value < current.value) {
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - highCompare.value)) {
                    highCompare = current;
                    // console.log("HIGHCOMPARE MOVING LEFT", highCompare.value)
                }
                current = current.left;
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - lowCompare.value)) {
                    lowCompare = current;
                    // console.log("LOWCOMPARE MOVING LEFT", lowCompare.value)
                }
            } else if (value > current.value) {
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - lowCompare.value)) {
                    lowCompare = current;
                    // console.log("LOWCOMPARE MOVING RIGHT", lowCompare.value)
                }
                current = current.right;
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - highCompare.value)) {
                    highCompare = current;
                    // console.log("HIGHCOMPARE MOVING RIGHT", highCompare.value)
                }
            } else {
                found = true;
            }
        }
        if (found === false) {
            let higher = Math.abs(highCompare.value - value);
            let lower = Math.abs(value - lowCompare.value);
            // console.log("HIGHER", higher)
            // console.log("LOWER", lower)

            if (lower < higher && lower != higher) {
                current = lowCompare;
                // console.log("lower < higher", current)
            } else {
                current = highCompare;
                // console.log("ELSE", current)
            }
        }
        // console.log("FOUND BEFORE RETURN", found)
        // console.log("CURRENT FIND", current)
        // console.log("Closest or higher value = ", current.value)

        return current.value;
    }
}



// --------------- Build Tree ----------------------


let tree = new BinarySearchTree();
tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(22)
tree.insert(140)

// ---------- Values FOUND in Tree -------------------

// tree.find(2) // Expected value returned 2
// tree.find(5) // Expected value returned 5
// tree.find(7) // Expected value returned 7
// tree.find(10) // Expected value returned 10
// tree.find(11) // Expected value returned 11
// tree.find(13) // Expected value returned 13
// tree.find(16) // Expected value returned 16
// tree.find(22) // Expected value returned 22
// tree.find(140) // Expected value returned 140

// ---------- Values NOT FOUND in Tree -------------------

// tree.find(9) // Expected value returned 10
// tree.find(77) // Expected value returned 22
// tree.find(80) // Expected value returned 22
// tree.find(100) // Expected value returned 140

// ----- Equal distance values not found in Tree ---------

// tree.find(6) // Expected value returned 7
// tree.find(12) // Expected value returned 13
// tree.find(19) // Expected value returned 22
// tree.find(81) // Equal Distance - Expected value returned 140





// ----------------------------------------------------------------
// -------------------GIANT CONSOLE LOGS----------------------------
// ----------------------------------------------------------------


// // ---------- Values FOUND in Tree -------------------
// console.log(
//     "----Values FOUND in Tree----", "\n",
//     "ACTUAL = ", tree.find(2), "EXPECTED = 2", "\n", // Expected value returned 2
//     "ACTUAL = ", tree.find(5), "EXPECTED = 5", "\n", // Expected value returned 5
//     "ACTUAL = ", tree.find(7), "EXPECTED = 7", "\n", // Expected value returned 7
//     "ACTUAL = ", tree.find(10), "EXPECTED = 10", "\n", // Expected value returned 10
//     "ACTUAL = ", tree.find(11), "EXPECTED = 11", "\n", // Expected value returned 11
//     "ACTUAL = ", tree.find(13), "EXPECTED = 13", "\n", // Expected value returned 13
//     "ACTUAL = ", tree.find(16), "EXPECTED = 16", "\n", // Expected value returned 16
//     "ACTUAL = ", tree.find(22), "EXPECTED = 22", "\n", // Expected value returned 22
//     "ACTUAL = ", tree.find(140), "EXPECTED = 140", "\n" // Expected value returned 140
// )

// // ---------- Values NOT FOUND in Tree -------------------
// console.log(
//     "----Values NOT FOUND in Tree----", "\n",
//     "ACTUAL = ", tree.find(9), "EXPECTED = 10", "\n", // Expected value returned 10
//     "ACTUAL = ", tree.find(77), "EXPECTED = 22", "\n", // Expected value returned 22
//     "ACTUAL = ", tree.find(80), "EXPECTED = 22", "\n", // Expected value returned 22
//     "ACTUAL = ", tree.find(100), "EXPECTED = 140", "\n" // Expected value returned 140
// )

// // ----- Equal distance values not found in Tree ---------
// console.log(
//     "---Equal distance values not found in Tree---", "\n",
//     "ACTUAL = ", tree.find(6), "EXPECTED = 7", "\n", // Expected value returned 7
//     "ACTUAL = ", tree.find(12), "EXPECTED = 13", "\n", // Expected value returned 13
//     "ACTUAL = ", tree.find(19), "EXPECTED = 22", "\n", // Expected value returned 22
//     "ACTUAL = ", tree.find(81), "EXPECTED = 140", "\n" // Equal Distance - Expected value returned 140
// )



