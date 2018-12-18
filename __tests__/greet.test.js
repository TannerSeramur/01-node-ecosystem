'use strict';

const faker = require('faker');
const greet = require('../lib/greet');

describe('greet module', ()=>{
  it('works with string as name',()=>{
    let name = faker.name.firstName();
    let expected = 'hello '+name ;
    let result = greet.greet(name);
    expect(result).toEqual(expected);
  });
  it('works with string as name',()=>{
    let expected = 'hello world' ;
    let result = greet.greet('world');
    expect(result).toEqual(expected);
  });
  it('returns null with number as name',()=>{
    let expected = null;
    let result = greet.greet(5);
    expect(result).toEqual(expected);
  });
});