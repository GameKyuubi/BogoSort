function BogoSortR(array) {
  let sortedArray = [];

  function randomize(array) {
    let oldArray = array.slice();
    let newArray = [];
    while(oldArray.length > 0) {
      let index = Math.floor(Math.random() * oldArray.length);
      newArray.push(oldArray.splice(index, 1)[0]);
    }
    return newArray;
  }

  return tempArray;
}
