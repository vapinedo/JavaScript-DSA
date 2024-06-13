debugger;

function merge(arr1, arr2) {
    let mergedArray = [];
    let i = 0;
    let j = 0;

    // Recorremos ambos arrays hasta que lleguemos al final de uno de ellos
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++;
        } else {
            mergedArray.push(arr2[j]);
            j++;
        }
    }

    // Si aún hay elementos en arr1, los añadimos al final del mergedArray
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Si aún hay elementos en arr2, los añadimos al final del mergedArray
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    return mergedArray;
}

const test1 = [-1, 0, 4, 7, 10];
const test2 = [-2, 1, 2, 3, 9, 11, 12];

const result = merge(test1, test2);
console.log(result); // [-2, -1, 0, 1, 2, 3, 4, 7, 9, 10, 11, 12]
