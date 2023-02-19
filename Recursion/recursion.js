// ex: a recursive function to calculate the factorial of a number.

function fat(x) {
  if (x === 1) {
    return 1 
  } else {
    return x * fat(x-1)
  }
}

console.log(fat(1));//1
console.log(fat(3));//6