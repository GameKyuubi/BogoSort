function BogoSortR(array) {
  let sortedArray = [];
  let tempArray = array.slice();

  while(!checkSort(tempArray)) {
    tempArray = array.slice();
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

function BogoSortR2(array, update, interval, finish) {
  let sortedArray = [];
  let tempArray = array.slice();
  let intervalCounter = 0;

  while(!checkSort(tempArray)) {
    tempArray = array.slice();
    tempArray = randomize(tempArray);
    console.log(tempArray);
    if(intervalCounter <= interval)
      intervalCounter++;
    else {
      setTimeout(update(tempArray), 100);
      intervalCounter = 0;
    }
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

  finish(tempArray);
  return tempArray;
}
