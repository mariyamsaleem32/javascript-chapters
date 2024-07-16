// for loops nested

var arr = [11,13,14,15,20]
//  arr.splice(1, 0, 12)
    for (let i = 0; i < arr.length - 1; i++) 
{
    var diff = arr[i + 1]-arr[i];  // 2,1,1,5
            if (diff > 1)      // true
        {
            for (let j = 1; j < diff; j++) 
                 {
                arr.splice(i + j ,0, arr[i] + j)
                 }
        }
}
console.log(arr);


for (let i = 0; i < 5; i++)
{
  for (let j = 0; j < 5; j++) 
  {
   console.log(i,j);
  }
}

