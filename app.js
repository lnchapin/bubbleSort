let unsorted = [22,4,9,3,1,2]

function bubbleSort(arr) {
  let sorted = false
  while(!sorted){
    sorted = true
    for (var i = 0; i < arr.length; i++) {
      if(arr[i]>arr[i+1]){
        sorted = false
        let newHigh = arr[i]
        arr[i]= arr[i+1]
        arr[i+1]=newHigh
        console.log("arr after reorder", arr+"\n\n");
      }
    }
  }
  console.log(arr)
}

bubbleSort(unsorted)
