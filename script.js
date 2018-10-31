'use strict';
//Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F.
//Funkcja, która przyjmuje temperaturę C i zwraca informację np. o stanie skupienia wody.
//Funkcja, która przyjmuje temperaturę F i zwraca temperaturę C.
//Funkcję, która wyświetla tekst na stronie, odpowiednio dodając nową linię.
// \n` dodaje nową linię
//var square = function(x) {
//  return x * x;
//}
// wersja alternatywna
// function square(x) {
//   return x * x;
// }

//var a = prompt("Podaj liczbę");
//var result = square(a);
//console.log(result);

//function convertCelToFah(deg) {
//return (5/9) * (deg - 32);
//}
//

//Kursanci muszą się nauczyć programować na zasadach SOLID, gdzie pierwsza z liter oznacza Single Responsibility Principle (Zasada pojedynczej odpowiedzialności). Funkcja / Metoda / Klasa powinna wykonywać jedno określone zadanie.
//W naszym przypadku funkcja ma wyliczyć ile stopni Celsjusza to Fahrenheita. .

//Funkcja, która przyjmuje temperaturę C i zwraca temperaturę F.
function CtoF(x) {
return (5/9) * (x - 32);
};

//Funkcja, która przyjmuje temperaturę F i zwraca temperaturę C.
function FtoC(x) {
return (9/5) * x + 32;
}; 
//Funkcja, która przyjmuje temperaturę C i zwraca informację np. o stanie skupienia wody.
function water(x) {if  (x <= 0 && x >= -273.15) {
    output3.innerHTML = 'W tej temperaturze woda przyjmuje postać lodu' + '<br><br>';
  }
   else if  (x < -273.15) {
    output3.innerHTML = ' '+x+' stopni Celsjusza? Taka temperatura nie jest fizycznie możliwa' + '<br><br>';
  }
  else if (x > 0 && x < 100) {
    output3.innerHTML = 'W tej temperaturze woda jest cieczą' + '<br><br>';
  }
  else if (x >= 100) {
    output3.innerHTML = ' W tej temperaturze woda zamienia się w parę.' + '<br><br>';
  }
}
//Funkcję, która wyświetla tekst na stronie, odpowiednio dodając nową linię.

var output = document.getElementById('greeter-output');
var output3 = document.getElementById('greeter-output3');
var output4 = document.getElementById('greeter-output4');

output.innerHTML = 'Kliknij i podaj temperaturę w stopniach Celsjusza' + '<br><br>' + output.innerHTML; 

var button = document.getElementById('greeter-button');

var celsius;
var fahrenheit;

button.addEventListener('click', function(){
	
	celsius = window.prompt('Podaj, proszę temperaturę w stopniach Celsjusza');
if (celsius === null){
    output.innerHTML = 'Kliknięto "anuluj". Rezygnujesz?' + '<br><br>';
 }
  else var celsius= celsius.replace (',', '.'); 
if (isNaN(celsius))  {
    output.innerHTML = 'Wpisz tylko cyfry' + '<br><br>';
  }
  else if(celsius === '') {
    output.innerHTML = 'Nic nie wpisano' + '<br><br>';
  }
  else {
    fahrenheit = CtoF(celsius);
     output.innerHTML = ' '+celsius+' stopni Celsjusza to '+fahrenheit+' stopni Fahrenheita!'
    water(celsius);
    }
});
   
var button2 = document.getElementById('greeter-button2');
var output2 = document.getElementById('greeter-output2');
var celsius2;
var fahrenheit2;

output2.innerHTML = 'Kliknij i podaj temperaturę w stopniach Fahrenheita' + '<br><br>' + output2.innerHTML; 
button2.addEventListener('click', function(){
	
	fahrenheit2 = window.prompt('Podaj, proszę temperaturę w stopniach Fahrenheita');

  if (fahrenheit2 === null){
    output2.innerHTML = 'Kliknięto "anuluj". Rezygnujesz?' + '<br><br>';
  } else {
      var fahrenheit2= fahrenheit2.replace (',', '.');
      if (isNaN(fahrenheit2))  {
        output2.innerHTML = 'Wpisz tylko cyfry' + '<br><br>';
      } else if (fahrenheit2 === '') {
        output2.innerHTML = 'Nic nie wpisano' + '<br><br>';
      } else {
        celsius2 = FtoC(fahrenheit2);
        if (celsius2 <= 0 && celsius2 > -273.15) {
           output2.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita to '+celsius2+' stopni Celsjusza! W tej temperaturze woda przyjmuje postać lodu' + '<br><br>';
        } else if (celsius2 < -273.15) {
          output2.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita? Taka temperatura nie jest fizycznie możliwa' + '<br><br>'+ output2.innerHTML;
        } else if (celsius2 > 0 && celsius2 <100 ) {
          output2.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita to '+celsius2+' stopni Celsjusza! W tej temperaturze woda jest cieczą' + '<br><br>'+ output2.innerHTML;
        } else if (celsius2 >= 100) {
          output2.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita to '+celsius2+' stopni Celsjusza! W tej temperaturze woda zmienia się w parę' + '<br><br>'+ output2.innerHTML;
        }
      }
    }
  });
