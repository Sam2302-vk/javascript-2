//Array creation and intialization//

// let arr=[23,24,25,26,27,28,29,30]

//Array Manipulation//

// let arr=[23,24,25,26,27,28,29,30]
// arr.push(45);
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(23)
// console.log(arr)
// arr.shift()
// console.log(arr)

//Array Filtering//

// for(i=0;i<=arr.length;i++){
//     if(arr[i]>25){
//         console.log(arr[i])
//     }

// }

//Array Mapping//

//  let arr=[2,3,4,5,6,7,8,9]
//  let sqr=arr.map(num=>Math.sqrt(num))
//  console.log(sqr)

//Array Searching//

// let arr=[2,3,4,5,6,7,8,9]
// arr.indexOf(3)
// console.log(arr[3])
// console.log(arr.includes())
let arr=[5, 12, 8, 130, 44];
let farr = arr.find((num) =>  num> 10);
console.log(farr);
