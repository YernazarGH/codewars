function order(words){
    // ...
    let reg = /\d/; //regular expression on number 
    let arr = words.split(' '); // transform to array
    arr.sort((a,b)=> a.match(reg)-b.match(reg));    //sort by found number in the text
    let result = arr.join(' ');    // transform to string again
    console.log(result);
};

order("is2 Thi1s T4est 3a");
//"Thi1s is2 3a T4est"