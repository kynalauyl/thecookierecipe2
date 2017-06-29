/*
var words = 'hello sweetie';
var list = ['almond', 'butter', 'choc'];

console.log(words);
console.log(list.length);
console.log(list[1]);

function sayName(name1, name2) {
  console.log('the impossible girl ' + name1);
  console.log('the man in the blue police box ' + name2);
}

sayName('Clara Oswald', 'The Doctor');

function showList(pos) {
  console.log(list[pos]);
}

showList(1);

for (var i = 0; i < 3; i++) {
  console.log(i);
}

for (var i = 0; i < list.length; i++) {
  console.log(list[i]);
}

console.log(list.length);
*/

/* comment! actual code starts from here*/
var menu = document.querySelector('select');
var articles = document.querySelectorAll('article');

  for (var i = 0; i < articles.length; i++) {
  console.log(articles[i]);
}

/* .addEventListener allows the simulation to take place over and over evertime it is clicked!*/
menu.addEventListener('change', function(){
  for (var i = 0; i < articles.length; i++) {

    if (menu.value !== 'all') {
      articles[i].classList.add('hide');
      if (articles[i].classList.contains(menu.value)) {
        articles[i].classList.remove('hide');
      }
    } else {
      articles[i].classList.remove('hide');
    }
  }
});

if (menu.value !== 'all') {
  console.log('showing each ingredients');
} else {
  console.log('all the things');
}
