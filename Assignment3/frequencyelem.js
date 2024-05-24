function countFrequency(arr) {
    var freq = {};
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (freq[element] !== undefined) {
            freq[element] = freq[element] + 1;
        } else {
            freq[element] = 1;
        }
    }
    return freq;
}

var arr = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
console.log(countFrequency(arr));