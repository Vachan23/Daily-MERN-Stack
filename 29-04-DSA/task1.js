class Node
{
	constructor(key)
	{
		this.key=key;
		this.left=this.right=null;
	}
}

function addBT(root)
{
	if (root == null)
		return 0;
	return (root.key + addBT(root.left) +
					addBT(root.right));
}

let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.left = new Node(6);
root.right.right = new Node(7);
root.right.left.right = new Node(8);

let sum = addBT(root);
document.write("Sum of all the elements is: " + sum);

