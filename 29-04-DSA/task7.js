class Node
	{
		constructor(key) {
		this.left = null;
		this.right = null;
		this.key = key;
		}
	}
	function findLevel(root, k, level)
	{

		if (root == null)
		{
			return -1;
		}

		if (root.key == k)
		{
			return level;
		}

		let l = findLevel(root.left, k, level + 1);
		return (l != -1)? l : findLevel(root.right, k, level + 1);
	}
	function findDistUtil(root, n1, n2, lvl)
	{
		if (root == null)
		{
			return null;
		}

		if (root.key == n1)
		{
			d1 = lvl;
			return root;
		}
		if (root.key == n2)
		{
			d2 = lvl;
			return root;
		}

		let left_lca = findDistUtil(root.left, n1,
									n2, lvl + 1);
		let right_lca = findDistUtil(root.right, n1,
										n2, lvl + 1);
		if (left_lca != null && right_lca != null)
		{
			dist = (d1 + d2) - 2 * lvl;
			return root;
		}
		return (left_lca != null)? left_lca : right_lca;
	}

	function findDistance(root, n1, n2)
	{
		d1 = -1;
		d2 = -1;
		dist = 0;
		let lca = findDistUtil(root, n1, n2, 1);

		if (d1 != -1 && d2 != -1)
		{
			return dist;
		}

		if (d1 != -1)
		{
			dist = findLevel(lca, n2, 0);
			return dist;
		}

		if (d2 != -1)
		{
			dist = findLevel(lca, n1, 0);
			return dist;
		}
		return -1;
	}
	let root = new Node(1);
	root.left = new Node(2);
	root.right = new Node(3);
	root.left.left = new Node(4);
	root.left.right = new Node(5);
	root.right.left = new Node(6);
	root.right.right = new Node(7);
	root.right.left.right = new Node(8);
	document.write("Dist(4, 5) = " +
					findDistance(root, 4, 5) + "</br>");
	document.write("Dist(4, 6) = " +
					findDistance(root, 4, 6) + "</br>");
	document.write("Dist(3, 4) = " +
					findDistance(root, 3, 4) + "</br>");
	document.write("Dist(2, 4) = " +
					findDistance(root, 2, 4) + "</br>");
	document.write("Dist(8, 5) = " +
					findDistance(root, 8, 5) + "</br>");
	