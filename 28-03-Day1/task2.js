function Arrays_sum(array1, array2) 
{
  var result = [];
  var ctr = 0;
  var x=0;

  if (array1.length === 0) 
   return "array1 is empty";
  if (array2.length === 0) 
   return "array2 is empty";   

  while (ctr < array1.length && ctr < array2.length) 
  {
    result.push(array1[ctr] + array2[ctr]);
    ctr++;
  }

  if(ctr < array1.length-1 ){
      while(ctr < array1.length){
        result.push(array1[ctr]);
        ctr++;
      }
  }
  else{
    while(ctr < array2.length){
        result.push(array2[ctr]);
        ctr++;
      }
  }

  return result;
}

console.log(Arrays_sum([1,0,2,3,4], [3,5,6,7,8,13]));
