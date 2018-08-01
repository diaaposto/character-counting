function countLetters (str) {
  let uniqueChars = {};

  for (let i = 0; i < str.length; i++) {
    let curChar = str[i];
    // if (curChar !== ' ') {
      if (uniqueChars[curChar]) {           //uniqueChars[curChar]
        // console.log("this is uniqueChars", uniqueChars)
        // console.log("this is curChar", curChar)
        // console.log("this is obj", uniqueChars[curChar]);
        uniqueChars[curChar]++;
      } else {
        uniqueChars[curChar] = 1;
      }
    // }
  }
  delete uniqueChars[' '];

  return uniqueChars;

};

console.log(countLetters("lighthouse in the house"));

//answer looks like:

// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }