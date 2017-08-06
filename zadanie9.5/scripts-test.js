/*console.log(window);

function raiseAlarm() {
    alert('I show it once after 2 seconds.');
}

var delayedAlert = setTimeout(raiseAlarm, 2000);



function raiseAlarm() {
    alert('I show myself every four seconds.')
}

var interval = setInterval(raiseAlarm, 4000);

function stop() {
    alert('It took 20 seconds. The following statement interrupts the interval.');
    clearInterval(interval);
}

setTimeout(stop, 20000);
*/
console.log(document); 
console.log(location);

var navigation = document.getElementById('nav');
console.log(navigation);

var withMenuItemsClass = document.getElementsByClassName('menuItem');

console.log(withMenuItemsClass);

var itemsByTagName = document.getElementsByTagName('li');

console.log(itemsByTagName);

var navigation = document.getElementById('nav');
var newElem = document.createElement('p');

newElem.innerHTML = 'The text inside the p tag, which is under newElem';

navigation.appendChild(newElem);

var navigation = document.getElementsByClassName('menuItem');

console.log(navigation[0].style);

navigation[0].style.background = 'red';
navigation[0].style.padding = '10px';

console.log(navigation[0].style);