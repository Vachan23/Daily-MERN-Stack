function Rearrange(arr){
    
    len = arr.length-1;
    bool = true;
    for(i=0; i<len; i++){
        
        max =Math.max (arr[i], arr[i+1]);
        min =Math.min (arr[i], arr[i+1]);

        if (bool==true){
            arr[i] = min;
            arr[i+1]=max;
            bool = false;
        }
        else{
            arr[i]=max;
            arr[i+1]=min;
            bool = true;
        }
    }
    return arr;
}
// console.log(arr);
let arr = [1,2,3,4,5,6,7]

console.log(Rearrange(arr));
