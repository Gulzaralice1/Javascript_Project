// concept of slice
// concept of split in js

let num = 3.1415;
let afterDecimal = num.toString().split('.')[1];
console.log(afterDecimal.slice(0, 2));
console.log(afterDecimal);  // Output: 1415
