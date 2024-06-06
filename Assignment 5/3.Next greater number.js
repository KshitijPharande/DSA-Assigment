
let arr = [4,5,2,25]

function nextGreater(){

    return arr.map((value) => {
        const indexNumber = arr.findIndex(a => a == value);
        console.log(indexNumber);
        const nextGreaterValue = arr.slice(indexNumber).find(b => b > value);
        console.log(nextGreaterValue);
        return nextGreaterValue !== undefined ? nextGreaterValue : -1;
    });

}
console.log(nextGreater());