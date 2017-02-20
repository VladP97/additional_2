module.exports = function flatten(array) {
    var newArr = [];
    var arr = joinToArr(array, newArr);
    return arr;
}

joinToArr = function(array,newArr) {
    if (array instanceof Array == false) {
        return [];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array == true) {
            array[i] = arguments.callee(array[i],newArr);
        } else {
            newArr[i] = array[i];
        }
    }
    return newArr;
}
