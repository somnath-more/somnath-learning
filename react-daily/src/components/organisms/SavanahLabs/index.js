const arr = [3, 4, 3, 6, 1, 4, 6, 3];

const FrequencyCount = () => {
    let outputArray = {};
    for (let i = 0; i < arr.length; i++) {
        // Check if the element exists in outputArray
        outputArray[arr[i]] = (outputArray[arr[i]] || 0) + 1;
    }

    console.log(outputArray);
}

FrequencyCount();
