let value = "*+AB-CD";

function convertPrefixToPostfix() {
    let stack = [];
    let length = value.length;

    for (let i = length - 1; i >= 0; i--) {
        let char = value[i];
        if (isOperator(char)) {
            let operand1 = stack.pop();
            let operand2 = stack.pop();

            let postfixExpr = operand1 + operand2 + char;
            stack.push(postfixExpr);
        } else {
            stack.push(char + "");
        }
    }
    return stack.pop();
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

console.log(convertPrefixToPostfix());
