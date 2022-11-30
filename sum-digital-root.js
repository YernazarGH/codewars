function digitalRoot(n) {
    // ...
    let string = "" + n, // change number to string
          divide = string.split('').map(Number),  //change to array with number
          sum = divide.map(i => x += i, x = 0).reverse()[0];  //plus all number in array and transform it to number
    if (sum <= 9){ // if after first math our result done, return it 
      return sum; // if you show answer in terminal use console.log(sum)
    } else {  //else use cycle
        let sumNew = 0; //startly value our result 
        for(let i = 0; i <= ('' + sum).split('').map(Number).length; i ++){ //cycle with automatic length
            if(sum >= 9) {  //if sum more than 9 to math again, else break our cycle
                string = '' + sum; 
                divide = string.split('').map(Number);
                sum = divide.map(i => x += i, x = 0).reverse()[0]; 
            }
        }
        sumNew = sum; // startly value equal to last result our cycle
        return sumNew; // if you show answer in terminal use console.log(sumNew)
    }
}
// function digitalRoot(n) {        //code smaller result
//     while (true) {
//         let string = "" + n,
//           divide = string.split('').map(Number), 
//           summa = divide.map(i => x += i, x = 0).reverse()[0];
//         console.log(summa);
//         n = summa;
//         if(summa < 10){break};
//     }
// };       
// digitalRoot(4564274545);

digitalRoot(4564274545);