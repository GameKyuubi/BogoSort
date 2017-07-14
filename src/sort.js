function BogoSortR(array) {
  let _array = array.slice();
  let sortedArray = [];
  let tempArray = _array.slice();

  while(!checkSort(tempArray)) {
    tempArray = _array.slice();
    tempArray = randomize(tempArray);
  }

  function randomize(array) {
    let oldArray = array.slice();
    let newArray = [];
    while(oldArray.length > 0) {
      let index = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray.splice(index, 1)[0]);
    }
    return newArray;
  }

  function checkSort(array) {
    for(let i = 0; i < array.length - 1; i++) { // if this succeeds to the end - 1 of the array, the last element has already been checked
      if(!(array[i] <= array[i + 1])) {
        return false;
      }
    }
    return true;
  }

  return tempArray;
}
