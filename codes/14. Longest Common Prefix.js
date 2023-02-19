/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let outputs="";
    //sort the array of strings by strings length
    strs.sort((a,b) => a.length - b.length);

    //get the first word after sorting
    let word = strs[0];

    //Compose a new array from strs without the first element
    let rest = strs.slice(1);

    if(strs.length == 1) outputs =  word;

    for(let i=0; i < word.length; i++){
        let j=0;
        for(let k=0; k<rest.length; k++){
            if(rest[k].startsWith(word.substring(0,i+1))){
                j++;
            }
            if(j == rest.length){
                outputs = word.substring(0,i+1);
            }
        }
    }
    return outputs;
};
