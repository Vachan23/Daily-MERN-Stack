class Node
{
    constructor(data)
    {
        this.data = data;
        this.left = this.right = null;
    }
}
 

function inorder(root)
{
    if (root == null)
        return;
  
    inorder(root.left);
  
    document.write(root.data + " ");
  
    inorder(root.right);
}
 

function isIdentical(root1,root2)
{
    
    if (root1 == null && root2 == null)
        return 1;
          
    
    else if (root1 != null &&
             root2 == null)
        return 0;
    else if (root1 == null &&
             root2 != null)
        return 0;
    else
    {
        
        if (root1.data == root2.data &&
            isIdentical(root1.left, root2.left) == 1 &&
            isIdentical(root1.right, root2.right) == 1)
            return 1;
        else
            return 0;
    }
}
 
let root1 = new Node(5);
    let root2 = new Node(5);ṇ
    root1.left = new Node(3);
    root1.right = new Node(8);
    root1.left.left = new Node(2);
    root1.left.right = new Node(4);
  
    root2.left = new Node(3);
    root2.right = new Node(8);
    root2.left.left = new Node(2);
    root2.left.right = new Node(4);
  
    if (isIdentical(root1, root2)==1)
        console.log("Both BSTs are identical");
    else
        console.log("BSTs are not identical");