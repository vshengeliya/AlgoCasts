// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//1st solution
function reverseInt1(n) {

    let reversed;
    if (Math.sign(n)===1 ||  n === 0){
        reversed = parseInt(n.toString().split('').reverse().join(''))
    } else {
        reversed = parseInt('-' + parseInt(n.toString().split('').reverse().join('')))    
    }
    return reversed
}

// 2nd solution
function reverseInt2(n){
    let reversed = n.toString().split('').reverse().join('')
    return parseInt(reversed) * Math.sign(n);
}

//Math.sign() returns 1 is positive number, return -1 if negative number
//ParseInt 
//toString

module.exports = reverseInt;
