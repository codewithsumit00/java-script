// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if ( char === "a"|| char ==="e"||char ==="i" || char ==="o" ||char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
//}
 



// same task with the help of errow function 

//   const countVow = (str)=>{
//     let count = 0;
//     for(const char of str){
//         if ( char === "a"|| char ==="e"||char ==="i" || char ==="o" ||char ==="u"){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVow("hello ");
// countVow("absd jjhuhsvid ");
// countVow("helloiucjdiouu ");

// // FOR EACH VAL 

// let city = ["Hydrabad" ,"Delhi", "kanpur", "shamli"];
 
// city.forEach((val,idx) =>{
//     console.log(val.toUpperCase(), idx);

// });


// // prectice number 

// let arr = [1,2,3,4,5,6,7,8,9];

// arr.forEach((num) =>{
//     console.log(num*num);
// })


// // map methods 

// let newarr = [ 52,23,25,];

// let newar = newarr.map((val)=>{
//     return val*2;

// });
// console.log (newar); 
    
// // filter methods 

// let n =[ 1,2,3,4,5,6,];
 
// let evenarr = n.filter ((val)=>{
//     return val%2===0;
// })
// console.log (evenarr);


// //reduce method 

// // let a = [1,2,3,40];
// // const output = a.reduce((res, currentval)=>{
// //     return res+currentval;
// // });
// // console.log (output); 

// //new prectice question 

// let arrr = [78,83,73,90,95];
// let toppers = arrr.filter((val) =>{
//     return val >= 90;

// });
// console.log (toppers); 

// fectorial \


let n = prompt("enter a number:");

let fact = [ ];
for (let i = 1;  i <= n; i++){
 fact[i-1 ] = i;  
}
console.log (fact);

let factorial = fact.reduce((res, curr) => {
    return res*curr;
});
console.log(factorial);


