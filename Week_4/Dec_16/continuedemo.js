let arr = [1,2,3,4,5];

for(let i = 0; i < arr.length; i++) {
    if(arr[i] % 3  == 0) {
        // if the number is divisble by 3
        break; // continuing as we donot want to print
    }
    console.log(arr[i]**2);
}