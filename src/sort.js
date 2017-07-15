importScripts('../bower_components/jquery/dist/jquery.js');

function BogoSortR2(array) {
  let sortedArray = [];
  let tempArray = array.slice();
  let intervalCounter = 0;
  let sorted = false;

  while(!sorted) {
    tempArray = array.slice();
    tempArray = randomize(tempArray);
    console.log('Array attempt: ' + tempArray);
    postMessage(tempArray);
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

  $.playSound('../mail.mp3');
  return tempArray;
}

console.log('Worker created');

self.onmessage = function(list) {
  BogoSortR2(list.data);
};
