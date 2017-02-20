module.exports = function flatten(array) {
    var newArr = [];
    var arr = joinToArr(array, newArr);
    arr.pop();
    return arr;
}

joinToArr = function(array,newArr) {
    if (array instanceof Array == false) {
        return [];
    }
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Array == true) {
            newArr.push(arguments.callee(array[i],newArr));
        } else {
            newArr.push(array[i]);
        }
    }
    return newArr;
}
