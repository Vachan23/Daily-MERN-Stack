class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.val = data;
		}
	}

	function length(node)
	{
		if (node == null)
			return 0;

		let left = length(node.left);
		let right = length(node.right);

		let Leftmax = 0, Rightmax = 0;

		if (node.left != null &&
			node.left.val == node.val)
			Leftmax += left + 1;
		if (node.right != null &&
			node.right.val == node.val)
			Rightmax += right + 1;

		ans = Math.max(ans, Leftmax + Rightmax);
		return Math.max(Leftmax, Rightmax);
	}

	function longestSameValuePath(root)
	{
		ans = 0;
		length(root);
		return ans;
	}

	function newNode(data)
	{
		let temp = new Node(data);
		temp.val = data;
		temp.left = temp.right = null;
		return temp;
	}
	
	let root = null;
	root = newNode(4);
	root.left = newNode(4);
	root.right = newNode(4);
	root.left.left = newNode(4);
	root.left.right = newNode(9);
	root.right.right = newNode(5);
	document.write(longestSameValuePath(root));

