let input
do {
  input = parseInt(prompt(`Insert a number`,20));
  if (isNaN(input)) {alert(`${input} is not a number`)}
} while (isNaN(input))

function divisibleBy(dividend,divisor,message) {
  if (dividend%divisor==0) {return message};
  return ''
}

for (let i = 1; i <= input; i++) {
  let output = ''
  output += divisibleBy(i,3,`Fizz`)
  output += divisibleBy(i,5,`Buzz`)
  if(output == ''){output=i}
  console.log(output)
}
