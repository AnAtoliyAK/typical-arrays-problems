
exports.min = function min(array) {
    if ((Array.isArray(array)) == false) { return 0; }
    else if (array.length == 0) { return 0; }
    else {
        let array1 = array.sort((a, b) => a - b);
        return array1[0];
    }
}

exports.max = function max(array) {
    if ((Array.isArray(array)) == false) { return 0; }
    else if (array.length == 0) { return 0; }
    else {
        let array1 = array.sort((a, b) => b - a);
        return array1[0];
    }
}

exports.avg = function avg(array) {
    if ((Array.isArray(array)) == false) { return 0; }
    else if (array.length == 0) { return 0; }
    else {
        let sum = 0;
        for (let item of array) {
            sum += item;
        }
        let result = (sum / array.length);
        return result;
    }
}
