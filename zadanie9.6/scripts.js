/*
function checkOnclickEvent(param) {
  console.log(param);
}
var inputElem = document.getElementById('js-inputValue'),
    imageElem = document.getElementById('js-image');

imageElem.addEventListener('click', function(e) {
  checkOnclickEvent('image was clicked')
});

inputElem.addEventListener('keypress', function(e) {
  e.target.value += ' ! ';
});
*/



var list = document.getElementById('list')
var add = document.getElementById('addElem')

add.addEventListener('click', function() {
	var element = document.createElement('li');
	console.log('element to ' + element);
	
	var getElements = document.getElementsByTagName('li');
	console.log('getElements to ' + getElements);
	
	var elementsNumber = getElements.length + 1;
	console.log('elementsNumber to ' + elementsNumber);
	
	element.innerHTML = 'item ' + elementsNumber;
	list.appendChild(element);
});