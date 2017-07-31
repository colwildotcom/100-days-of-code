function bouncer(arr) {
  var falsy = arr.filter(function(element){
    return Boolean(element);
  });
  return falsy;
}

bouncer([7, "ate", "", false, 9]);
