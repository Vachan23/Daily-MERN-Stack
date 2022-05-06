class Node
	{
		constructor(k)
		{
			this.data = k;
			this.left = null;
			this.right = null;
		}
		
	}
	
function isLeaf(node)
{
		if (node == null)
			return false;
		if (node.left == null && node.right == null)
			return true;
		return false;
	}
	

function leftLeavesSum(node)
	{
	
		let res = 0;

		if (node != null)
		{
		
			if (isLeaf(node.left))
				res += node.left.data;
			else 
				res += leftLeavesSum(node.left);

			res += leftLeavesSum(node.right);
		}

		return res;
	}
	
	root = new Node(20);
	root.left = new Node(9);
	root.right = new Node(49);
	root.left.right = new Node(12);
	root.left.left = new Node(5);
	root.right.left = new Node(23);
	root.right.right = new Node(52);
	root.left.right.right = new Node(12);
	root.right.right.left = new Node(50);
	
	document.write("The sum of leaves is " +leftLeavesSum(root));
