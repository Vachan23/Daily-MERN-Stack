arr=[1,2,3,4,45];
const groupBy=(callback)=>{
    var a=[],b=[];
    arr.map(el=>{
    if(callback(el)=='less'){
      a.push(el);
    }
    else{
       b.push(el);
    }
})
console.log(a,b)
}
const hs=(el)=>{
    if(el<5) return "less";
    else return "more";
    }
groupBy(hs);
