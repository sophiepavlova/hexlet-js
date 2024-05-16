import _ from 'lodash';
import summing from './src/index.js';

console.log(_.last(['one', 'two']));
console.log('Hello, Hexlet!');

const sumOfTwoElements = summing(10, 12);
console.log(`the sum of two numbers is ${sumOfTwoElements}`);
// console.log();
