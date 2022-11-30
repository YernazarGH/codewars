function alphabetPosition(text) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';  //write alphabet with this number in alphabet
    let reg = /\s|\'|\,|\.|1|2|3|4|5|6|7|8|9|0|\`|\~|\!|\@|\#|\$|\%|\^|\&|\*|\(|\)|\_|\+|\=|\-|\\|\"|\;|\:|\?|\/|\>|\<|\[|\]|\{|\}|\*|\|/g; //write regular expression which we delete in the text, they are symbals and numbers
    text = text.replace(reg, ''); // replace all symbal and number to null
    let textLenght = text.toLowerCase().split('').map(char => alphabet.includes(char)? alphabet.indexOf(char) + 1 : null).join(' ').length;   //texts length
    let someText = text.toLowerCase().split('').map(char => alphabet.includes(char)? alphabet.indexOf(char) + 1 : null).join(' ').substring(0, textLenght);  // function which change word to number in alphabet
    console.log(someText);
}
alphabetPosition("The sunset sets at twelve o' clock.");

