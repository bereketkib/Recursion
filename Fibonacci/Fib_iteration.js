function fibs(num) {
    if (num <= 0) return [];
    if (num == 1) return [0];
    const result = [0, 1];
    for (let i = 2; i < num; i++) {
        const nextFib = result[i - 1] + result[i - 2];
        result.push(nextFib);
    }
    return result;
}


console.log(fibs(8)); //[0, 1, 1,  2, 3, 5, 8, 13]