
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var newArray = [];
  for (i = 0; i<arr.length;i=i+size) {
    newArray.push(arr.slice(i,i+size));
  }
  
  return newArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);
