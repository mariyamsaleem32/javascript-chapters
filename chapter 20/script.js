// for loops nested

var arr = [11,13,14,15,19,20]
 arr.splice(1, 0, 12)
    for (let i = 0; i < arr.length; i++) 
{
    var diff = arr[i + 1]-arr[i]; 
            if (diff > 1) 
        {
            for (let j = 1; j < diff; j++) 
                 {
                arr.splice(i + j ,0, arr[i] + j)
                 }
        }
}
console.log(arr);