function BogoSortR2(array) {
  let sortedArray = [];
  let tempArray = array.slice();
  let count = 0;
  let sorted = false;

  while(!sorted) {
    count++;
    tempArray = array.slice();
    tempArray = randomize(tempArray);
    postMessage({
      'update': tempArray,
      'count': count
    });
    sorted = checkSort(tempArray);
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

console.log('Worker created');

self.onmessage = function(list) {
  BogoSortR2(list.data);
  postMessage({
    'control': 'finished'
  });
};
