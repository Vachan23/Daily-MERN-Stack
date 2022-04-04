class Node{
    constructor(val) {
        this.key = val;
        this.left = null;
        this.right = null;
    }
}

var root = null;

function inorder(root){
    if (root == null){
        return;
    }

    inorder(root.left);
    console.log(root.key);
    inorder(root.right);
}

function preorder(root){
    if (root == null){
        return;
    }

    console.log(root.key);
    preorder(root.left);
    preorder(root.right);
}

function postorder(root){
    if (root == null){
        return;
    }

    postorder(root.left);
    postorder(root.right);
    console.log(root.key);
}

root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("The inorder traversal of the given tree is: ")
console.log(inorder(root));
console.log("The preorder traversal of the given tree is: ")
console.log(preorder(root));
console.log("The postorder traversal of the given tree is: ")
console.log(postorder(root));