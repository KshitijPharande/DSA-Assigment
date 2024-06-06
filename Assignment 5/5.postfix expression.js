let exp = "231*+9-";

function evaluatePostfix() {
    // create a stack
    let stack = [];

    // Scan all characters one by one
    for (let i = 0; i < exp.length; i++) {
        let char = exp[i];
        if (!isNaN(char)) {
            stack.push(char.charCodeAt(0) - '0'.charCodeAt(0));
        } else {
            let value1 = stack.pop();
            let value2 = stack.pop();
            let result;

            switch (char) {
                case '+':
                    result = value2 + value1;
                    stack.push(result);
                    break;

                case '-':
                    result = value2 - value1;
                    stack.push(result);
                    break;

                case '/':
                    result = value2 / value1;
                    stack.push(result);
                    break;

                case '*':
                    result = value2 * value1;
                    stack.push(result);
                    break;
            }
        }
    }
    return stack.pop();
}

console.log(evaluatePostfix());
