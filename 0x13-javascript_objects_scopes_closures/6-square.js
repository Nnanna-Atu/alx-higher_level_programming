#!/usr/bin/node
const square = require('./5-square');

class Square extends square {
  charPrint (c) {
    if (c === undefined) {
      c = 'X';
    }
    for (let i = 0; i < this.height; i++) {
      let r = '';
      for (let j = 0; j < this.width; j++) {
        r += c;
      }
      console.log(r);
    }
  }
}

module.exports = Square;