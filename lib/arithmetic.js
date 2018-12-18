'use strict';

let arithmetic = module.exports = {};

arithmetic.add = function(arr) {
  let sum = 0;
  arr.filter(e => (typeof e !=='number')? null : e ).forEach(e => sum = sum+e);
  if(sum === 0){return null;}
  return sum;
};

arithmetic.subtract = function (arr) {
  let newArr = arr.filter(e => (typeof e !=='number')? null : e );
  let sub = 0;
  newArr.forEach(e => sub === 0? sub = sub+e : sub = sub-e);
  if(sub === 0){return null;}
  return sub;
};

arithmetic.multiply = function(arr) {
  let newArr = arr.filter(e => (typeof e !=='number')? null : e );
  let multi = 1;
  newArr.forEach(e => multi === 1? multi = e : multi = multi*e);
  if(multi === 1){return null;}
  return multi;
};

arithmetic.divide = function (a,b) {
  if( typeof a !== 'number' || typeof b !== 'number' || b === 0 || a === 0 ) { return null; }
  return a/b;
};