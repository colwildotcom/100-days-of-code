
function largestOfFour(arr) {
  var resultArr = [];
  for(var i=0;i<arr.length;i=i+1) {

    var largest = 0;
    for(var j=0;j<arr[i].length;j=j+1) {
      
      if (arr[i][j]>largest) {
        largest = arr[i][j];
      }
    }
      resultArr.push(largest);
  }
  // You can do this!
  return resultArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
