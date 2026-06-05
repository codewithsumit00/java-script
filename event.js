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
let body = document.querySelector("body");
let currentmode  = "light";

// ensure theme starts clean
body.classList.add("light", "mode");

modebtn.addEventListener("click", () => {
    if (currentmode === "light") {
        currentmode = "dark";
        body.classList.remove("light", "mode");
        body.classList.add("dark", "mode");
    } else {
        currentmode = "light";
        body.classList.remove("dark", "mode");
        body.classList.add("light", "mode");
    }

    console.log("current mode: " + currentmode);
});
