let arr1:number[]=[1,2,3]
arr1.push(4)//okay
arr1.push("Hello")//wrong

let arr2:Array<number|string>=[1,2,3]

arr2.push(4);
arr2.push("Hello")