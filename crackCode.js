'use strict';

const decode = function(encodedWord) {
  if (encodedWord[0] === 'a') {
    console.log(encodedWord[1]);
  }
  if (encodedWord[0] === 'b') {
    console.log(encodedWord[2]);
  }
  if (encodedWord[0] === 'c') {
    console.log(encodedWord[3]);
  }
  if (encodedWord[0] === 'd') {
    console.log(encodedWord[4]);
  }
  else return ' ';
};

decode('craft');