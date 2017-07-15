importScripts('sort.js');
importScripts('../bower_components/jquery/dist/jquery.js');
importScripts('../bower_components/lodash/dist/lodash.js');

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

BogoSortR2(unsortedList, async function(list) {
  $('.unsorted-container').empty();
  _.each(list, async function(value) {
    var $div = $('<div>' + value + '</div>');
    $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
    $unsortedContainer.append($div);
  });
  //console.log('update called');
  //setTimeout(function() {}, 200);
  },
  1000,
  function() {
});

console.log(list);
console.log($container);
