function largest_subarray(a, n)
{
	let index = new Map();
	let ans = 0;
	for(let i = 0, j = 0; i < n; i++)
	{

		j = Math.max(index.has(a[i]) ?
							index.get(a[i]) : 0, j);

		ans = Math.max(ans, i - j + 1);

		index.set(a[i], i + 1);
	}

	return ans;
}

let arr = [ 1, 2, 3, 4, 5, 1, 2, 3 ];
let n = arr.length;
console.log(largest_subarray(arr, n));

