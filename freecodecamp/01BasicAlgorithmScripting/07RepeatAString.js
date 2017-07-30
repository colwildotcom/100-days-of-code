
function repeatStringNumTimes(str, num) {
  // repeat after me
  var newStr = "";
  for (i=0;i<num;i=i+1) {
    newStr = newStr + str;
  }
  return newStr;
}

repeatStringNumTimes("abc", 3);
