function longestConsecutive(listOfStrings, k) {
    let longest = ''
    for (let i = 0; i < listOfStrings.length; i ++){
        let tempWord = listOfStrings.slice(i, i + k).join('');
        if (longest.length < tempWord.length) {
            longest = tempWord;
        }
    }
    return longest;

}

// Extra work, trying to figure out how to use a foreach/reducer
// function longestConsecutive2(listOfStrings, k){
//     let currentLongestWord = ''
//     return currentLongestWord = listOfStrings.forEach(validateStringLength);
// }

// function validateStringLength(element, index, listOfStrings) {
//     let tempWord = listOfStrings.splice(index, index + k).join('');
//     if (longest.length < tempWord.Length) {
//         return tempWord;
//     };
//     return ''
// };
// 


console.log(longestConsecutive(['hi', 'marbles', 'mittens', 'bye', 'lorem', 'ipsum', 'to', 'a', 'hippocampus'], 3)); // -> 'marblesmittensbye'

console.log(longestConsecutive(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2)) // --> "abigailtheta"