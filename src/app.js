var list = [];
for(let i = 0; i < 4; i++) {
  list.push(Math.floor(Math.random() * 1000));
}

var $container = $('container');

_.each(list, (id) => {
  var $div = $('<div></div>');
  $div.attr('id', id).addClass('number');
  $container.append($div);
});
  var $div = $('<div></div>');
  $div.attr('id', id).addClass('number');
  $container.append($div);

console.log(list);
console.log($container);
