// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {

    //need to build a helper fucntion buildCharMap to clear up the strings and build an object,
    // so we can pass 2 given strings

    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    //then compare if the length of keys of both strings are the same, if yes then ..

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length){
        return false
    } 
   
    for (let char of stringA){
    //.. compare if the quantity of each key are the same exp. strA[h]=1, strB[h]=1, if 1===1, return true
        if (aCharMap[char]!= bCharMap[char]){
            return false
        }
    }
    return true
}

    function buildCharMap(str){

        const charMap= {}

        for (let char of str.replace(/[^\w]/g, "").toLowerCase()){
            charMap[char] = charMap[char]+1 || 1;
        }
        return charMap
    }

anagrams('hello', 'lleho!!!?><')

module.exports = anagrams;
