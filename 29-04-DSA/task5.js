class Node {
	constructor(val) {
		this.data = val;
		this.left = null;
		this.right = null;
	}
}
var maxLen;
var maxSum;
	
function sumOfLongRootToLeafPath(root , sum, len)
	{
		if (root == null)
		{
		
			if (maxLen < len) {
				maxLen = len;
				maxSum = sum;
			} else if (maxLen == len && maxSum < sum)
				maxSum = sum;
			return;
		}
		
		
		sumOfLongRootToLeafPath(root.left, sum + root.data,
								len + 1);
		
		sumOfLongRootToLeafPath(root.right, sum + root.data,
								len + 1);
		
	}
	
	function sumOfLongRootToLeafPathUtil(root)
	{
	
		if (root == null)
			return 0;
	
		maxSum = Number.MIN_VALUE;
		maxLen = 0;
	
		sumOfLongRootToLeafPath(root, 0, 0);
	
		return maxSum;
	}
	
	
		var root = new Node(4);		 
		root.left = new Node(2);		 
		root.right = new Node(5);	 
		root.left.left = new Node(7);
		root.left.right = new Node(1);
		root.right.left = new Node(2);
		root.right.right = new Node(3);
		root.left.right.left = new Node(6);
	
		document.write( "Sum = "+ sumOfLongRootToLeafPathUtil(root));

