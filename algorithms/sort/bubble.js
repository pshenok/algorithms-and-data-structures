// Bubble sort - O(n²)

const bubbleSort = arr => {
    for (let i = 0, len = arr.length - 1; i < len; i++) {
        let swaped = false;
        for (let j = 0; j < len - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                swaped = true;
            }
        }
        if (!swaped) break;
    }
    return arr;
};


//test
const arr = [10,7,1,2,8,14,0,3];
console.log(bubbleSort(arr));