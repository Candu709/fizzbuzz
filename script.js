let input
do {
   input = parseInt(prompt(`Insert a number`,15));
   if (isNaN(input)) {alert(input+` is not a number`)}
} while (isNaN(input))
