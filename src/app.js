var unsortedList = [];
for(let i = 0; i < 6; i++) {
  unsortedList.push(Math.floor(Math.random() * 1000));
}

var sortedList = _.sortBy(unsortedList);

var $unsortedContainer = $('.unsorted-container');
var $sortedContainer = $('.sorted-container');

_.each(unsortedList, function(value) {
  var $div = $('<div>' + value + '</div>');
  $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
  $unsortedContainer.append($div);
});

_.each(sortedList, function(value) {
  var $div = $('<div>' + value + '</div>');
  $div.attr('id', 'sorted-' + value).addClass('sorted-number number');
  $sortedContainer.append($div);
});

worker = new Worker('sort.js');
worker.addEventListener('message', function(list) {
  console.log('Recieved message from worker: ' + list);
  $('.unsorted-container').empty();
  _.each(list, function(value) {
    var $div = $('<div>' + value + '</div>');
    $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
    $unsortedContainer.append($div);
  });
});

worker.postMessage(unsortedList);
