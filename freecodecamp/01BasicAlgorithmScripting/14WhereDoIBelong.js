
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  arr = arr.sort(function(a, b) {
    return a > b;
  });
  
  for(var i=0;i<arr.length;i=i+1) {
    if(arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

getIndexToIns([2, 5, 10], 15);
