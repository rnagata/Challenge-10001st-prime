'use strict';

//https://codepen.io/KeithB/pen/jwadG  closest solution I could find
module.exports = function(n) {
  var primes = [2];
  var x = 3;
  var count = 0;
  do{
    for(var y = 2; y < x; y++){
      if(x % y === 0){
        count++;
      }
    }
    if(count === 0){
      primes.push(x);
      x++;
    } else {
      x++;
      count = 0;
    }
  } while(primes.length<n);
  return primes[primes.length-1];
};
