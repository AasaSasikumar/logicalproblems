
let arr = [3, 7, 1, 4, 90, 78, 67,45, 10];


let length = arr.length;


for (let i = 0; i < length / 2; i++) {
    for (let j = i + 1; j < length / 2; j++) {
        if (arr[i] > arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}


for (let i = length / 2; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
        if (arr[i] < arr[j]) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}


console.log("Sorted Array:", arr);
