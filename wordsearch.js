const transpose = function(matrix) {
    let temp = [];
   
    for (let R = 0; R < matrix[0].length; R++) {
      temp.push([]);
      for (let C = 0; C < matrix.length; C++) {
        temp[R].push(matrix[C][R]);
      }
    }
    return temp;
  };
  const searchEngine = (letters, word) => {
    const matrixJoin = letters.map(ls => ls.join(''));
  
    for (l of matrixJoin) {
      if (l.includes(word))
        return true;
    }
  };
     
  
  const wordSearch = (letters, word) => {
    if (searchEngine(letters, word)) {
      return true;
    } else if (searchEngine(transpose(letters), word)) {
      return true;
    }
    return false;
  };
  module.exports = wordSearch;