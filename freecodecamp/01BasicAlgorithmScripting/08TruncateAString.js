
function truncateString(str, num) {
  // Clear out that junk in your trunk
  var trunc = str.length;
  var dotdotdot = "";
  if (trunc > num) {
    trunc = num - 3;
    dotdotdot = "...";
    if (num <= 3) {
      trunc = num;
    }
  }
  return str.substr(0,trunc) + dotdotdot;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
