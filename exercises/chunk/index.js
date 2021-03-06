// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
   
    //create emplty array to hold chuncks called 'chunked'
    //For each element in the *unchunnked* array
    //Retrieve the last element in 'chuncked'
    //If last element doesn't exist, or if its length is equal to chunk size
    //Push a new chunck into 'chunked' with the current element
    //Else add the current element into chunck

    const chunked = []
    for (let element of array){

        const last = chunked[chunked.length-1]
        if (!last || last.length===size){
            chunked.push([element])
        } else{
            last.push(element)
        }
    }
        return chunked
}

// 2nd solution
// Create empty 'chunked' array
//Create 'indexi' at 0
//While index is less that arrray.length
 //Push a slice of lenth 'size' from 'array'
 // Add 'size' to 'index'

function chunk(array, size){
 const chunked = []
  let index = 0;
   while (index < array.length){
       chunked.push(array.slice(index, index + size));
       index += size;
   }
   return chunked
}

module.exports = chunk;
