let arr = "{[()]}"

function isBalanced() {
    let brackets = { 
        "(": ")",
        "[": "]",
        "{": "}"
    }

    let stack = []

    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        console.log("Current character:", char);

        if (brackets[char]) {
            stack.push(char);
            console.log("Stack after push:", stack);
        } else {
            let last = stack.pop();
            console.log("Last element from stack:", last);

            if (char !== brackets[last]) {
                return false;
            }
        }
    }

    return stack.length === 0;
}

console.log(isBalanced());
