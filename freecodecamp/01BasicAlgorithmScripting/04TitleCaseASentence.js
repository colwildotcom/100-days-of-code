
function titleCase(str) {
  strA = str.toLowerCase().split(" ");
  for(var i=0;i<strA.length;i=i+1) {
    splitA = strA[i].split("");
    splitA[0] = splitA[0].toUpperCase();
    strA[i] = splitA.join("");
  }
  return strA.join(" ");
}

titleCase("I'm a little tea pot");
