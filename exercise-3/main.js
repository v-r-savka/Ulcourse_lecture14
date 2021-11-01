'use strict';

// Given an array of strings, return that array but add a ‘!’ symbol at the end of each string.

let strings = ['HTML', 'CSS', 'JS'];

strings = strings.map(str => str + '!');

alert(strings);
