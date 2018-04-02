'use strict';

function jediName(firstName, lastName) {
  let resultName = firstName.slice(0, 2) + lastName.slice(0, 3);
  
  console.log(resultName);
}


jediName('Jenny', 'Flynn');