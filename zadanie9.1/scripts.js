
	var a = parseInt(prompt('podaj liczbę'));
	var h = parseInt(prompt('podaj liczbę'));
	// var TriangleArea = a*h/2

function getTriangleArea(a, h) {
  if ((a > 0) && (h > 0)) {
    // console.log('dane prawidlowe, licze pole');
	return a*h/2;
  } else {
    return 'Nieprawidłowe dane';
  }
}

console.log(getTriangleArea(a, h));

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(3, 4);
console.log(triangle1Area);

var triangle2Area = getTriangleArea(1, 5);
console.log(triangle2Area);

var triangle3Area = getTriangleArea(-1, 4);
console.log(triangle3Area);
