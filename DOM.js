// let div = document.querySelector("#box");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let DOM = documet.querySelector("p");
// console.log(DOM.setAttribute("class","DOM"));


let newButton = document.createElement("button");
newButton.innerHTML = "Click me";
console.log(newButton);


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>this is a new heading</i>";
 document.querySelector("body").prepend(newHeading);


 let para = document.querySelector("p");
  para.remove();

newHeading.remove ();