function mergeSort (arr) {
    if (arr.length <= 1) return arr;

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    const leftSorted = mergeSort(left);
    const rightSorted = mergeSort(right);

    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftSorted.length && rightIndex < rightSorted.length) {
        if (leftSorted[leftIndex] < rightSorted[rightIndex]) {
          result.push(leftSorted[leftIndex]);
          leftIndex++;
        } else {
          result.push(rightSorted[rightIndex]);
          rightIndex++;
        }
      }
      return result.concat(leftSorted.slice(leftIndex), rightSorted.slice(rightIndex));
}

const unsortedArray = [5, 3, 7, 6, 4, 9, 2, 1, 8];
const sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);