let arr1 = [5, 7, -1, 0, -5, 2, -3, 4];

function bubbleSort(array) {
    let swapped;
    do {
        swapped = false;
        array.forEach((_, i) => {
            if (array[i] > array[i + 1]) {
                [array[i], array[i + 1]] = [array[i + 1], array[i]]; // Swap elements
                swapped = true;
            }
        });
    } while (swapped);
    return array;
}

console.log(bubbleSort(arr1));