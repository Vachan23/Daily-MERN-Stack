function smallestSubWithSum(arr, n, x)
{

	let min_len = n + 1;

	for (let start=0; start<n; start++)
	{
	
		let curr_sum = arr[start];

		if (curr_sum > x) return 1;

		for (let end=start+1; end<n; end++)
		{
		
			curr_sum += arr[end];

			if (curr_sum > x && (end - start + 1) < min_len)
				min_len = (end - start + 1);
		}
	}
	return min_len;
}

let arr1 = [1, 4, 45, 6, 10, 19];
let x = 51;
let n1 = arr1.length;
let res1 = smallestSubWithSum(arr1, n1, x);
(res1 == n1 + 1)? console.log("Not possible<br>") :
console.log(res1);

let arr2 = [1, 10, 5, 2, 7];
let n2 = arr2.length;
x = 9;
let res2 = smallestSubWithSum(arr2, n2, x);
(res2 == n2 + 1)? console.log("Not possible<br>") :
console.log(res2);

let arr3 = [1, 11, 100, 1, 0, 200, 3, 2, 1, 250];
let n3 = arr3.length;
x = 280;
let res3 = smallestSubWithSum(arr3, n3, x);
(res3 == n3 + 1)? console.log("Not possible<br>") :
console.log(res3);
