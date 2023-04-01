
// let  a="valmiki"

// const fun=()=>{
//   const check=()=>{
//     console.log("my name is",a)
//   }
//   return check
// }
// let c=fun()
// c()

//higher order function k

// let array=[1,2,3]
// const myfun=(arr,fun)=>{
//     for(let i=0;i<arr.length;i++){
//      fun(arr[i])
       
//     }
// }
// const func=(num)=>{
    
//         console.log("hii",num)
    
// }
// myfun(array,func)


//map higher order function

// let arr=[1,2,3,4]
// const res=arr.map((el)=>{
//     return el*2
// })
// console.log(res)

//filter higher order function

// let arr=[1,2,3,4,5,6];
// let fdata=arr.filter((el)=>{
//     return el%2==0
// })
// console.log(fdata)


// reduce higher order function

// let arr=[1,2,3,4]
// let rdata=arr.reduce((acc,curr)=>{
//     return acc+curr
// })
// console.log(rdata)
// let a=10
//  a=20
// console.log(a)

//call appy and bind
///call
// let name={
//     "first":"Abhisek",
//     "last":"Kumar"
// }
// let changefun=function(food,hobby){
//     console.log(`hii my name is ${this.first}${this.last} and I eat ${food} my hoobby is ${hobby}`)

// }
// changefun.call(name,"cake","football");

// //apply
// changefun.apply(name,["mango","cricket"])

// //bind
// let laterfun=changefun.bind(name,"biryani","chess")
// laterfun()


// rest operator and spread operator
// spread operator
// let arr1=[1,2,3]
// let arr2=[4,5,6]
// let arr3=[...arr1,...arr2]
// console.log(arr3)

//rest operator
// function fun(...num){
//     let sum=0;
//     for(let el of num){
//         sum+=el
//     }
//     return sum
// }
// console.log(fun(1,2,3,4,5,6))


