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
        console.log("FIND VALUE", value)
        if (this.root === null) return "Error, no data to assess!";
        let lowCompare = this.root;
        let highCompare = this.root;
        let current = this.root
        let found = false
        console.log("FIND FIRST CURRENT", current.value)
        console.log("FIND FIRST FOUND", found)
        console.log("FIND FIRST HIGH", highCompare.value)
        console.log("FIND FIRST LOW", lowCompare.value)

        //   console.log("Current = ", current)
        while (current && !found) {
            console.log("CURRENT INSIDE WHILE", current.value)
            console.log("FOUND INSIDE WHILE", found)
            if (value < current.value) {
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - highCompare.value)) {
                    highCompare = current;
                    console.log("HIGHCOMPARE MOVING LEFT", highCompare.value)
                }
                current = current.left;
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - lowCompare.value)) {
                    lowCompare = current;
                    console.log("LOWCOMPARE MOVING LEFT", lowCompare.value)
                }
            } else if (value > current.value) {
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - lowCompare.value)) {
                    lowCompare = current;
                    console.log("LOWCOMPARE MOVING RIGHT", lowCompare.value)
                }
                current = current.right;
                if (current !== null && Math.abs(value - current.value) <= Math.abs(value - highCompare.value)) {
                    highCompare = current;
                    console.log("HIGHCOMPARE MOVING RIGHT", highCompare.value)
                }
            } else {
                found = true;
            }
        }
        if (found === false) {
            let higher = Math.abs(highCompare.value - value);
            let lower = Math.abs(value - lowCompare.value);
            console.log("HIGHER", higher)
            console.log("LOWER", lower)
            
            if (lower < higher && lower != higher) {
                current = lowCompare;
                console.log("lower < higher", current)
            } else {
                current = highCompare;
                console.log("ELSE", current)
            }
        }
        console.log("FOUND BEFORE RETURN", found)
        console.log("CURRENT FIND", current)
        console.log("CURRENT FIND VALUE", current.value)

        return current.value;
    }
}




console.log("hello world")
// console.log("BOOLEAN", Boolean(59 < 59))
console.log("BOOLEAN", Boolean(59 != 59))









let tree = new BinarySearchTree();
// console.log("TREE", tree)
// tree.insert(10);
// console.log("TREE INSERT", tree)
// tree.insert(15);
//   tree.insert(7);
//   tree.insert(9);

tree.insert(10)
tree.insert(5)
tree.insert(13)
tree.insert(11)
tree.insert(2)
tree.insert(16)
tree.insert(7)
tree.insert(22)
tree.insert(140)

// tree.find(19)
// tree.find(10)
// tree.find(16)
// tree.find(6)
// tree.find(100)
tree.find(81)
// tree.find(6)
// tree.find(6)
// tree.find(6)
// tree.find(6)
