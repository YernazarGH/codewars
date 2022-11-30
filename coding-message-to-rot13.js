function rot13(message){
    let arr = message.split(''); // transform message to array
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; //alphabet
    let result = [];  //startly result in array
    let reg = /\w/; // regular when find all Words
    
    for(let i = 0; i < arr.length; i++){  //cycle to change words in ROT13
        let autoLenght = alphabet.indexOf(arr[i].toString())  //formul where find auto length word in array
        if(autoLenght >= 0 && autoLenght <= 12) {   // if length in alphabet from 0 to 12 change length to 13-25
            result.push(arr[i].toString().replace(reg, alphabet[autoLenght + 13])) 
        }else if (autoLenght >= 13 && autoLenght <= 25){  // if length in alphabet from 13 to 25 change length to 0-12
            result.push(arr[i].toString().replace(reg, alphabet[autoLenght - 13]))
        } else if (autoLenght >= 26 && autoLenght <= 38){ // if length in alphabet from 26 to 38 change length to 39-51
            result.push(arr[i].toString().replace(reg, alphabet[autoLenght + 13]))
        }else if (autoLenght >= 39 && autoLenght <= 51){  // if length in alphabet from 39 to 51 change length to 26-38
            result.push(arr[i].toString().replace(reg, alphabet[autoLenght - 13]))
        }else{  // if words are symbals and numbers just add to result
            result.push(arr[i].toString())
        };
    };
    console.log(result.join(''));
}