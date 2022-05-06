class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.data = data;
		}
	}
	
function addNode(data)
	{
		let temp = new Node(data);
		return temp;
	}

function rightLeafSum(root)
	{
		if(root == null)
			return;

		if(root.right != null)
			if(root.right.left == null &&
			root.right.right == null)
				sum += root.right.data;

		rightLeafSum(root.left);
		rightLeafSum(root.right);
	}
let root = addNode(1);
root.left = addNode(2);
root.left.left = addNode(4);
root.left.right = addNode(5);
root.left.left.right = addNode(2);
root.right = addNode(3);
root.right.right = addNode(8);
root.right.right.left = addNode(6);
root.right.right.right = addNode(7);
	
sum = 0;
rightLeafSum(root);
document.write(sum );
	
