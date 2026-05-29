let item =[250,645 ,300,900,50];
let idx = 0;
for (let val of item ){
    //console.log ("value at index" +idx + "=" + val);
    let offer = val /10;
    item [idx] = val -offer;
    console.log ("value after discount " + item [idx]);

    idx++;
}
// array methods 
let item1 =[250,645 ,300,900,50];
let offer1 = item1.map (val => val - (val /10));
console.log (offer1);
// slice method
let item2 =[250,645 ,300,900,50];
let offer2 = item2.slice (1,2);
console.log (offer2);

//array slice and ssplice methods 

// let array =[1,2,3,4,5,6,7,];
//  array.splice (2,4,101,101,103,104);
//   console.log (array ); 

let array =[1,2,3,4,5,6,7,]; //add value at index 
    array.splice (1,0,102);
    console.log (array);

    