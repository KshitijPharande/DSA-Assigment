let value = "AB+CD-*";

function convertPostfixToPrefix() {
    let stack = [];

    for (let i = 0; i < value.length; i++) {
        let char = value[i];
        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            let prefixExpr = char + operand2 + operand1;
            stack.push(prefixExpr);
        } else {
            stack.push(char + "");
        }
    }

    let result = stack.join("");
    let reversedResult = [];

    for (let i = result.length - 1; i >= 0; i--) {
        reversedResult.push(result[i]);
    }

    return reversedResult.join("");
}

function isOperator(char) {
    switch (char) {
        case '+':
        case '-':
        case '/':
        case '*':
            return true;
    }
    return false;
}

console.log(convertPostfixToPrefix());
