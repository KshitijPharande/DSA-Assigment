let exp = "*+AB-CD";

function convertPrefixToInfix() {
    let stack = [];

    let length = exp.length;

    for (let i = length - 1; i >= 0; i--) {
        let char = exp[i];

        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            let infixExpr = "(" + operand1 + char + operand2 + ")";
            stack.push(infixExpr);
        } else {
            stack.push(char);
        }
    }
    return stack.pop();
}

function isOperator(c) {
    switch (c) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            return true;
    }
    return false;
}

console.log(convertPrefixToInfix());
