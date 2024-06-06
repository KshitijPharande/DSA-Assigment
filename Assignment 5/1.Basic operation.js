
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let push = arr.push(10)

let pop = arr.pop()

function peek() {
    return arr[arr.length - 1]
}

function isEmpty() {
    if (arr.length == 0) {
        return true
    }
}

console.log(push);
console.log(pop);
console.log(peek());
console.log(isEmpty());