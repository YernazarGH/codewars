function squareDigits(num){
    let number = num.toString().split('').map(Number); // transform number to string and after that transform it to array, and after that values in array transform to type number
    let sqr = number.map((square)=>square**2); //square all number in array
    let result = +sqr.join(''); // transform array to number

    console.log(result);
}
squareDigits(321)
