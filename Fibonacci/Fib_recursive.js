function fibsRec (num, a = 0, b = 1, arr = []) {
    if (num === 0) return arr;
    return fibsRec(num - 1, b, a + b, [...arr, a]);
}


console.log(fibsRec(8)); //[0, 1, 1,  2, 3, 5, 8, 13]