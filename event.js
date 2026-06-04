//let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) =>{
//     console.log( evt);
// console.log (evt.type);
// console.log (evt.target);

//     // let a = 25;
//     // a++;
//     // console.log (a);

// };
// let box = document.querySelector("div");


// box.onmouseover = () => {
//     console.log ("you are inside div ");
//   alert ("this page working wtih event");
// }; 

// btn1.addEventListener("click", () =>{
// console.log("button was clicked ");
// });

// let div = document.querySelector("div");

// div.addEventListener("mouserover", () =>{
//     console.log("you are inside the box");
//     alert("this page working with event");
// })

let modebtn = document.querySelector("#mode");
let current = "light";
modebtn.addEventListener("click",() =>{
    if (currntmode === "light"){
        currentmode = "dark";
        document.querySelector("body").style.backgroundColor = "black ";

    }else{
        currentmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log("you are trying to change mode ")
});