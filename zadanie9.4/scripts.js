

function drawTree(i){
  for ( var k = 0 ; k < i ; k++) {
  	
  	var ileGwiazdek = k + 1;

  	var star = '';
  	for ( var j = 0 ; j < ileGwiazdek ; j++) {
  		star += '*';

    }
    
    console.log(star);
  }
}

drawTree(5)

console.log('-----------');

/*
   a-> wysokość (wszystkie rzędy)
   b-> aktualny rząd
   c-> ilość spacji w rzędzie
   d-> ilość gwiazdek w rzędzie
*/

function drawTree2(a){
  for ( var b = 1 ; b <= a ; b++) {

  	var row = '';

  	for(var c=1; c<=a-b; c++){
       row += ' ';
    }

  	for ( var d = 1 ; d <= (2*b-1) ; d++) {
  		row += '*';
    }
 
    console.log(row);
  }
}

drawTree2(6);

console.log('-----------');

function wydrukujGwiazdki(ileGwiazdek) {
	var gwiazdki = '';
	for(var i = 0; i < ileGwiazdek; i++) {
		gwiazdki = gwiazdki + '*';
	}
	console.log(gwiazdki);
}


function dajElement(ile, element) {
	var wynik = '';
	for(var i = 0; i < ile; i++) {
		wynik = wynik + element;
	}
	return wynik;
}


function wydrukujGwiazdkiZeSpacjami(ileGwiazdek, aktualnyRzad, rzedy) {
	var ileSpacji = rzedy - aktualnyRzad;
	var wiersz = dajElement(ileSpacji, ' ') + dajElement(ileGwiazdek, '*');
	console.log(wiersz);
}

function drukujChoinke(rzedy) {
  for ( var b = 1 ; b <= rzedy ; b++) {
  	var ileGwiazdek = 2*b-1;
  	wydrukujGwiazdkiZeSpacjami(ileGwiazdek, b, rzedy);
  }
}

drukujChoinke(5);

console.log('-----------');





// var n = 8;

// for(i=1; i<=n; i++)
// { 
// 	var wiersz = '';
//     //Prints trailing spaces
//     for(j=i; j<n; j++)
//     {
//         // document.write("&nbsp&nbsp");
//         wiersz += ' ';
//     }

//     //Prints the pyramid pattern
//     for(j=1; j<=(2*i-1); j++)
//     {
//         // document.write("*");
//         wiersz += '*';
//     }

//     // document.write("<br>");
//     console.log(wiersz);

//  }


