'use strict';

function jediName(firstName, lastName) {
  let resultName = firstName.slice(0, 2) + lastName.slice(0, 3);
  
  console.log(resultName);
}

jediName('Jenny', 'Flynn');


function beyond(num) {
  if (num === Infinity) {
    console.log('And beyond');  
  }
  if (num !== Infinity && num > 0) {
    console.log('To infinity');
  } 
  if (num !== Infinity && num < 0) {
    console.log('To negative infinity');
  }
  if (num === 0) {
    console.log('Staying home');
  }
}

beyond(Infinity);