class Node
{
	constructor(data)
	{
		this.data=data;
		this.left=this.right=null;
	}
}

function printPathUtil(node,s,root_data)
{
	if (node == null)
		return false;

	let rem = root_data - node.data;
	if (s.has(rem))
		return true;

	s.add(node.data);

	let res = printPathUtil(node.left, s, root_data) ||
			printPathUtil(node.right, s, root_data);

	s.delete(node.data);

	return res;
}

function isPathSum(root)
{
let s = new Set();

return printPathUtil(root.left, s, root.data) ||
		printPathUtil(root.right, s, root.data);
}

let root = new Node(8);
root.left = new Node(5);
root.right = new Node(4);
root.left.left = new Node(9);
root.left.right = new Node(7);
root.left.right.left = new Node(1);
root.left.right.right = new Node(12);
root.left.right.right.right = new Node(2);
root.right.right = new Node(11);
root.right.right.left = new Node(3);
document.write(isPathSum(root)==true ?"Yes" : "No");
