window.onload = function() {
  var unsortedList = [];
  for(let i = 0; i < 7; i++) {
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
  worker.onmessage = function(message) {
    var data = message.data;
    if(message.data.hasOwnProperty('update')) {
      var $container = $('<div class=\'unsorted-container container\'><div>');
      _.each(message.data['update'], function(value) {
        var $div = $('<div>' + value + '</div>');
        $div.attr('id', 'unsorted-' + value).addClass('unsorted-number number');
        $div.css('background-color', 'rgba(0, 0, ' + value + ')');
        $container.append($div);
      });
      var $trailContainer = $('.trail-container');
      $trailContainer.prepend($container);
      $counter = $('.counter');
      $counter.text('Attempts: ' + message.data['count']);
    } else {
      yakety.pause();
      var mail = new Audio('mail.mp3');
      mail.play();
    }
  };

  yakety = new Audio('yakety.mp3');
  yakety.play();
  worker.postMessage(unsortedList);
}
