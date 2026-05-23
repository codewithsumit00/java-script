let marks = prompt("please emter marks");
if (marks >=90 && marks <=100){
    console.log("a grade");
} else if (marks >=70 && marks<=89){
    console.log("B Grade");
} else if (marks >=60 && marks <=69){
    console.log("C Grade ");
} else if (marks >= 50 && marks <= 59 ){
    console.log ("D Grade");
}else if (marks >=0 && marks <=49){
    console.log ("Fail");

}else if (marks >=100){
    console.log("invalid marks please enter marks b/w 0 to 100");
}
console.log(marks);
