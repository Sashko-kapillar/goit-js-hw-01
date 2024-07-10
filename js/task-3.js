'use strict';

const username = " Poly!";
const message = "Welcome Poly!";
console.log(message + username);

// function getElementWidth(content, padding, border) {
//   let c = content;
// if (typeof c === 'string') {
//   c = Number(c)
// }
// let p = padding;
// if (typeof p === 'string') {
//   p= Number(p)
// }
// let d = border;
// if (typeof d === 'string') {
//   d = Number(d);
// }

// const b = content + p*2 + d*2;
// return Number(b);
// }

// console.log(getElementWidth("50px", "8px", "4px")); // 74
// console.log(getElementWidth("60px", "12px", "8.5px")); // 101
// console.log(getElementWidth("200px", "0px", "0px")); // 200

let g = "50px";
if (typeof g === "string") {
  g = Number(g)
}

console.log(g);