
function quickSort(arr) {
  //base case, arrays with 0 or 1 element.
  if(arr.length < 2) return arr
  //recursive case
    let pivot = arr[0]
  //sub-array of all the elements less than the pivot
    let less = arr.slice(1).filter(function(el){
     return el <= pivot; 
    });
    //sub-array of all the elements greater than the pivot
    let greater = arr.slice(1).filter(function(el){
      return el > pivot
    });
  return quickSort(less).concat([pivot], quickSort(greater));
}

console.log(quickSort([10, 5, 2, 3]));//[ 2, 3, 5, 10 ]