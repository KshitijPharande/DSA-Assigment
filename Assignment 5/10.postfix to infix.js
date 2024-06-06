let value = "AB+CD-*";

function convertPostfixToInfix() {
    let stack = [];

    for (let i = 0; i < value.length; i++) {
        let char = value[i];

        if (isOperand(char)) {
            stack.push(char + "");
        } else {
            let operand1 = stack.pop();
            let operand2 = stack.pop();
            let infixExpr = "(" + operand2 + char + operand1 + ")";
            stack.push(infixExpr);
        }
    }

    return stack[stack.length - 1];
}

function isOperand(x) {
    return (x >= 'a' && x <= 'z') || (x >= 'A' && x <= 'Z');
}

console.log(convertPostfixToInfix());
