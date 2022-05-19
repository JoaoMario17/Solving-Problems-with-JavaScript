const array = ['javascript', 'java', 'php', 'java', 'go', 'kotlin', 'swift', 'java'];


function countWords(array) {
  var count = {};

  array.forEach((item) => {
    if(count[item]) {
      count[item] ++;
    } else {
      count[item] = 1;
    }
  })

  return count;
};

console.log(countWords(array));