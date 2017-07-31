
function rot13(str) { // LBH QVQ VG!
  
  newStr = str.split("");
  for(i=0;i<str.length;i=i+1) {
    if (!/[^a-zA-Z0-9]/.test(newStr[i])) {
      
    code = newStr[i].charCodeAt() - 13;
    if (code < "A".charCodeAt()) {
      code = newStr[i].charCodeAt() + 13;
    }
    newStr[i] = String.fromCharCode(code);
    }
  }
  return newStr.join("");
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
