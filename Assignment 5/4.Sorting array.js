let arr = [34, 3, 31, 98, 92, 23];

function insertInSortedOrder(stack, element) {
    if (stack.length == 0 || element > stack[stack.length - 1]) {
        stack.push(element);
        return;
    }

    let topElement = stack.pop();
    insertInSortedOrder(stack, element);

    stack.push(topElement);
}

function sortStack(stack) {
    if (stack.length != 0) {
        let topElement = stack.pop();

        sortStack(stack);

        insertInSortedOrder(stack, topElement);
    }
}

function displayStack(stack) {
    sortStack(stack);
    for (let i = 0; i < stack.length; i++) {
        console.log(stack[i] + " ");
    }
}

displayStack(arr);
