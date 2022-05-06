class Node
	{
		constructor(data) {
		this.left = null;
		this.right = null;
		this.val = data;
		}
	}
	
	function helper(res, root, d)
	{
		if (root == null)
			return;

		if (d == res.length)
			res.push(root.val);

		else

			res[d] = Math.max(res[d], root.val);
		helper(res, root.left, d + 1);
		helper(res, root.right, d + 1);
	}

	function largestValues(root)
	{
		let res = [];
		helper(res, root, 0);
		return res;
	}

	function newNode(data)
	{
		let temp = new Node(data);
		return temp;
	}
	let root = null;
	root = newNode(4);
	root.left = newNode(9);
	root.right = newNode(2);
	root.left.left = newNode(3);
	root.left.right = newNode(5);
	root.right.right = newNode(7);
	
	let res = largestValues(root);
	for (let i = 0; i < res.length; i++)
			document.write(res[i]+" ");
	