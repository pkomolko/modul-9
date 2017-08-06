var buttons = document.getElementsByClassName('button');
console.log(buttons); 

console.log(buttons.length);

console.log(buttons[0].innerHTML);


for ( var k = 0 ; k <buttons.length ; k++) {
  alert(buttons[k].innerHTML);
}