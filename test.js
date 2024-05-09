const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  function calculator(num1, operator, num2) {
    switch(operator) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if(num2 !== 0) {
          return num1 / num2;
        } else {
          return 'Error! Division by zero is not allowed.';
        }
      default:
        return 'Error! Invalid operator.';
    }
  }
  
  readline.question('Enter the first number: ', (num1) => {
    readline.question('Enter the operator: ', (operator) => {
      readline.question('Enter the second number: ', (num2) => {
        const result = calculator(parseFloat(num1), operator, parseFloat(num2));
        console.log(`The result is: ${result}`);
        readline.close();
      });
    });
  });