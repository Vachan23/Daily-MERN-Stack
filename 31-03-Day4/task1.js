let arr = [ 8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28 ];
let n = arr.length;

class Node{
    constructor(d){
        this.data = d;
        this.left = this.right = null;
    }
}

let root = null;
let succ = null;

function insert(node,data){
    if (node == null){
        node = new Node(data);
    }

    if (data<node.data){
        succ = node;
        node.left = insert(node.left, data);
    }

    else if(data>node.data){
        node.right = insert(node.right, data);
    }

    return node;
}

function replace(arr,n){
    for(let i = n-1; i>=0; i--){
        succ = null;

        root = insert(root, arr[i])
        if (succ!=null){
            arr[i] = succ.data;
        }
        else{
            arr[i] = -1;
        }
    }
}

replace(arr,n);
for(let i=0; i<n; i++){
    console.log(arr[i] + " ")
}