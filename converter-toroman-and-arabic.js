let RomanNumerals = { //create class
    number : {  //oject to function fromRoman
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    },
    toRoman: function(number){  //converter from arabic to roman
        let lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1},  // object with roman value
            result = '',  //startly result
            i;  
            for ( i in lookup ) { // cycle which divided object key and value
                while ( number >= lookup[i] ) { //cycle which transform number to roman
                    result += i; // to increase result in roman with concatanation
                    number -= lookup[i]; // to decrease number 
                }
            }
        console.log(result);
    },
    fromRoman: function(symbal){  //converter from roman to arabic
        let result = 0; //startly result
        for(let i = 0; i < symbal.length; i++) {  //cycle which transform roman to integer
            let curr = this.number[symbal[i]];  // if form IX this I
            let next = this.number[symbal[i+1]];  //if form IX this X
            if(curr < next) { // sum result
                result -= curr; 
            }else {
                result += curr;
            }  
        }
        console.log(result);
    }
};