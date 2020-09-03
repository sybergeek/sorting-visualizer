export const mergeSort = (array, animations = []) => {
    if (array.length === 1) return array;
    const mid = Math.floor(array.length / 2);
    const leftPart = mergeSort(array.slice(0, mid));
    const rightPart = mergeSort(array.slice(mid));

    const sortedArray = [];
    let i = 0, j = 0;
    while (i < leftPart.length && j < rightPart.length) {
        if (leftPart[i] < rightPart[j]) {
            sortedArray.push(leftPart[i++]);
        } else {
            sortedArray.push(rightPart[j++]);
        }
    }
    while (i < leftPart.length) sortedArray.push(leftPart[i++]);
    while (j < rightPart.length) sortedArray.push(rightPart[j++]);
    return sortedArray;
}