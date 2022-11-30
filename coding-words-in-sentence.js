function pigIt(str){
    //Code here
    let arr = str.split(' '), // transform str to array
        resultArr = []; //startly value result in array
    for(let i = 0; i < arr.length; i++) {   //cycle to change words
        let eachWord = arr[i].split(''),    // each word in sentence
            firstLetter = eachWord[0],    // all first letter in words
            lastLetters = ['ay'];   // last letters in words
        eachWord.splice(0, 1);  //delete first two letters in array
        eachWord.push(firstLetter, lastLetters);    // add 1st letter to end word and add ay to end words 
        let a = eachWord.join('');  //transform to string
        resultArr.push(a);  //add all words to finally array
    }
    let result = resultArr.join(' '),   //transform finally array to string
        len = result[result.length - 3];    // if last letter in string is symbol or not
    if(len == ',' || len == '.' || len == '?' || len == ';' || len == ':' || len == '!') { // if symbol delete 'ay' . example: (.ay) transform to (.)
        console.log(result.substring(0, result.length-2));
    } else {    // if not a symbal fust return our result
        console.log(result);
    };
    console.log(result[result.length - 3]);   
};

pigIt('Pig latin is cool .'); 
// igPay atinlay siay oolcay