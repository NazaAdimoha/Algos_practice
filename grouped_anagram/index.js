/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //first instantiate a variable called group
    const group = {};

    //i want to loop through the object
    for(let i of strs){
        //i want to sort the values of strs and make value at I to be a key
        let sortedKey = i.split('').sort().join('');
        console.log(sortedKey)

        //I wanna check if the object exists
        if(!group[sortedKey]){
            group[sortedKey] = [i]
        } else {
            group[sortedKey].push(i)
        }
    }
    console.log("group", group)
    //now i want to retuen the values of the object group
    return (Object.values(group))


    const result = [];

    //I want to loop through the arr of strs
    for(let i=0; i < strs.length; i++){
        //I want to sort the indices of the strs by first converting each string into an array and join back into a string
        const sortStrs = strs[i].split('').sort().join('');
        console.log("###", sortStrs)

        if(sortStrs in group) {
            group[sortStrs] = group[sortStrs] = [...group[sortStrs], strs[i]];
        } else {
            group[sortStrs] = [strs[i]]
        }

    }

    for(let key in group) {
        //we now push the anagram pair into the empty array
        result.push(group[key]);
    }
    return result;
};