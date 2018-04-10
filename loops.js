
function forLoop(array) {
  for (var i = 0; i < 25; i++) {
    array.push("I am ${i} strange loop${i === 0 ? '' : 's'}.");
  }
  return array;
}


function whileLoop(n) {
  for (var i = n; i <= n && i > -1; i++) {
    i -= 1;
  }
  return "done";

}
