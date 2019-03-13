/*let arr:number[]

arr = []

arr[0] = 10
arr[1] = 2

console.log(`Length of Array : ${arr.length}`)
console.log(arr[0])
console.log(arr[1])*/

const maxNum = (nums:number[])=>{
	let max:number = nums[0];
	let index:number
	for(index=0;index<nums.length;index++)
	{
		if(nums[index]>max)
			max=nums[index]
	}
	return max;
}
const sortNum = (nums:number[])=>{
	let i:number,j:number

	for(i=0;i<nums.length-1;i++)
	{
		for(j=0;j<nums.length-i-1;j++)
		{
			if(nums[j]<nums[j+1])
			{
				nums[j]=nums[j]+nums[j+1]
				nums[j+1]=nums[j]-nums[j+1]
				nums[j]=nums[j]-nums[j+1]

			}
		}
	}
	console.log('Sorted : '+nums)
}

const SquareRoot = (num:number)=>{
	let start:number=1
	let end:number=num
	let root:number=0
	while(start<end)
	{
		if(start*start==end)
		{
			root=start
			break;
		}
		else
			start++
	}
	return root
}
const printPerfectSquare = (num:number[])=>{
	let i:number=0
	let count_perfect:number=0
	let maxRoot:number=0
	for(i=0;i<num.length;i++)
	{
		let root:number=SquareRoot(num[i])
		if(root>1)
		{
			count_perfect++
			console.log(root)
			if(root>maxRoot)
				maxRoot=root
		}
	}
	if(count_perfect==0)
		console.log("No perfect square roots present")
	else
		console.log(`Highest Root: ${maxRoot}`)
}
let numbers:number[] = [1,5,10,8,4,9]
//sortNum(numbers)
printPerfectSquare(numbers)