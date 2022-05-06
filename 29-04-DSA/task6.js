class Node
	{
		constructor(data)
		{
			this.data = data;
			this.left = this.right = null;
		}
	}
	
function maxLevelSum(root)
{
	if (root == null)
		return 0;

	let result = root.data;

	let q = [];
	q.push(root);
	while (q.length!=0)
	{
		
		let count = q.length;

		let sum = 0;
		while (count-- > 0)
		{
			let temp = q.shift();
			sum = sum + temp.data;
			if (temp.left != null)
				q.push(temp.left);
			if (temp.right != null)
				q.push(temp.right);
		}

		result = Math.max(sum, result);
	}
	return result;
}


let root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);
root.right.right = new Node(8);
root.right.right.left = new Node(6);
root.right.right.right = new Node(7);


document.write("Maximum level sum is " + maxLevelSum(root));
	
