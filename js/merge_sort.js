let arr1 = [5, 7, -1, 0, -5, 2, -3, 4, 9];

debugger

const merge = (left, right) => {
    let result = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        result.push(left[leftIndex] < right[rightIndex] ? left[leftIndex++] : right[rightIndex++]);
    }

    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
};

const mergeSort = (arr) => {
    if (arr.length <= 1) return arr;

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
}

const result = mergeSort(arr1);
console.log(result);
