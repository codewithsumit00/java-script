let item =[250,645 ,300,900,50];
let idx = 0;
for (let val of item ){
    //console.log ("value at index" +idx + "=" + val);
    let offer = val /10;
    item [idx] = val -offer;
    console.log ("value after discount " + item [idx]);

    idx++;
}