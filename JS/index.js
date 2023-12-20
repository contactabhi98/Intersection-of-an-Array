
// To check intersection of array.
function intersectionOfArray(arr1, arr2) {
    console.log(arr1, arr2);
    let resultArray = [];
    for(let i = 0; i < arr1.length; i++) {
        for(let j = 0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                if(!resultArray.includes(arr1[i])) {
                    resultArray.push(arr1[i]);
                }
            }
        }
    }

    return resultArray;
}

// Example usage
const myArray1 = [3,1,2,6,7,9,5];
const myArray2 = [3,2,5,10,11,12];



console.log("Intersection of Array",intersectionOfArray(myArray1, myArray2));
