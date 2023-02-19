/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let symbols = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
        "M" : 1000
    };
    let result=0;

    for(let i=0; i<s.length; i++){
        let inter = 0;
        if((s[i]=="I" && s[i+1] == "V") || (s[i]=="I" && s[i+1] == "X")){
            inter = symbols[s[i+1]] - 1;
            i++;
        }else if((s[i]=="X" && s[i+1] == "L") || (s[i]=="X" && s[i+1] == "C")){
            inter = symbols[s[i+1]] - 10;
            i++;
        }else if((s[i]=="C" && s[i+1] == "D") || (s[i]=="C" && s[i+1] == "M")){
            inter = symbols[s[i+1]] - 100;
            i++;
        }else{
            inter = symbols[s[i]];
        }

        result += inter;
    }
    return result;
};
