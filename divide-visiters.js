function openOrSenior(data){
    let result = [];    //startly value result
    data.forEach(function(item,value){  // divide array with forEach to each person's card. example [45,12] it is first person's card, [55,21] this is secod person's card
        if(item[0] >= 55 && item[1] > 7){   // make condittion, item[0] is person's age and itm[1] is his class
            result[value] = 'Senior';
        } else {
            result[value] = 'Open';
        };
    });
    console.log(result)
};

openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]);
//['Open', 'Senior', 'Open', 'Senior']