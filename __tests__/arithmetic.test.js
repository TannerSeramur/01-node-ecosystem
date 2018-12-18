'use strict';

const faker = require('faker');

const arithmetic = require('../lib/arithmetic.js');

describe('arithmetic module', () => {
  it('can add array of numbers', () => {
    let arr = [faker.random.number(),faker.random.number(),faker.random.number()];
    let expected = arr[0]+arr[1]+arr[2];
    let result = arithmetic.add(arr);
    expect(result).toEqual(expected);
  });
  it('will add array strings', () => {
    let arr = [faker.name.findName(),faker.name.findName(),faker.name.findName()];
    let expected = null;
    let result = arithmetic.add(arr);
    expect(result).toEqual(expected);
  });
  it('will add array of strings and numbers', () => {
    let arr = [faker.random.number(),faker.name.findName(),faker.random.number()];
    let expected = arr[0]+arr[2];
    let result = arithmetic.add(arr);
    expect(result).toEqual(expected);
  });
  it('can subtract array numbers', () => {
    let arr = [faker.random.number(),faker.random.number(),faker.random.number()];
    let expected = arr[0]-arr[1]-arr[2];
    let result = arithmetic.subtract(arr);
    expect(result).toEqual(expected);
  });
  it('will subtract array strings', () => {
    let arr = [faker.name.findName(),faker.name.findName(),faker.name.findName()];
    let expected = null;
    let result = arithmetic.subtract(arr);
    expect(result).toEqual(expected);
  });
  it('will subtract array of strings and numbers', () => {
    let arr = [faker.random.number(),faker.name.findName(),faker.random.number()];
    let expected = arr[0]-arr[2];
    let result = arithmetic.subtract(arr);
    expect(result).toEqual(expected);
  });
  
  it('can multiply two numbers', () => {
    let arr = [faker.random.number(),faker.random.number(),faker.random.number()];
    let expected = arr[0]*arr[1]*arr[2];
    let result = arithmetic.multiply(arr);
    expect(result).toEqual(expected);
  });
  it('will multiply two strings', () => {
    let arr = [faker.name.findName(),faker.name.findName(),faker.name.findName()];
    let expected = null;
    let result = arithmetic.multiply(arr);
    expect(result).toEqual(expected);
  });
  it('will multiply array of strings and numbers', () => {
    let arr = [faker.random.number(),faker.name.findName(),faker.random.number()];
    let expected = arr[0]*arr[2];
    let result = arithmetic.multiply(arr);
    expect(result).toEqual(expected);
  });
});
