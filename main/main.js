module.exports = function main(array) {
  // Write your code here
  var len = array.length;
  var sum = Number(array[0]);
  for(var i = 1; i < len; i++){
	  sum = sum + Number(array[i]);
  }
  return sum;
};
