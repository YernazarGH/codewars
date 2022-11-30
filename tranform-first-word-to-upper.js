function text (str) {  // function to correct your text    //if we send to code wars write "function(){}"
    
    let arrays = str.split(' ');    // transform your text to array [my, name, yernazar]       // if we send to code wars we should write "this.split(' ');""
    let text = '';  // value to our final text

    for(let i = 0; i < arrays.length; i++) {    // automatic change first words to upper case
        let arr = arrays[i].split('');  //first word all letters [m, y]
        let upper = arr[0].toLocaleUpperCase(); //change all first word to upper case [M, y]
        let change = arrays.map(changeArr => {  //replace upper case to lower case, change [m, y] to [M, y]
            return arr.splice(arr, 1, upper);
        });
        
        let initialValue = ' '; // startly value our reduce
        let a = arr.reduce( //reduce array to one text, change [M, y] to My
            (accumulator, currentValue) => accumulator + currentValue,
            initialValue
        );
        text += a; // plus all leters to text, for example: My + Name + Yernazar
    };
    text = text.substring(1); // delete first string, because it is space
    console.log(text);  //if we send to code wars we should write "return text;"
};

text("my name yernazar"); // text which we corrects
