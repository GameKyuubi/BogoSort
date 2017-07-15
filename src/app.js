var unsortedList = [];
for(let i = 0; i < 6; i++) {
  unsortedList.push(Math.floor(Math.random() * 255));
}

var sortedList = _.sortBy(unsortedList);

var $unsortedContainer = $('.unsorted-container');
var $sortedContainer = $('.sorted-container');

_.each(unsortedList, function(value) {
  var $div = $('<div>' + value + '</div>');
  $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
  $div.css('background-color', 'rgba(0, 0, ' + value + ')');
  $unsortedContainer.append($div);
});

_.each(sortedList, function(value) {
  var $div = $('<div>' + value + '</div>');
  $div.attr('id', 'sorted-' + value).addClass('sorted-number number');
  $div.css('background-color', 'rgba(0, 0, ' + value + ')');
  $sortedContainer.append($div);
});

var worker = new Worker('src/sort.js');
worker.onmessage = function(list) {
  var $container = $('<div class=\'unsorted-container container\'><div>');
  _.each(list.data, function(value) {
    var $div = $('<div>' + value + '</div>');
    $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
    $div.css('background-color', 'rgba(0, 0, ' + value + ')');
    $container.append($div);
  });
  var $trailContainer = $('.trail-container');
  $trailContainer.prepend($container);
};

var mail = new Audio('yakety.mp3');
mail.play();
worker.postMessage(unsortedList);
