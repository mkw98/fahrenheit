'use strict';

var output = document.getElementById('greeter-output');
var output3 = document.getElementById('greeter-output3');
var button = document.getElementById('greeter-button');
var celsius;
var fahrenheit;
var button2 = document.getElementById('greeter-button2');
var celsius2;
var fahrenheit2;

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
//Dodaj funkcję, która wyświetla tekst na stronie, odpowiednio dodając nową linię.
// \n` dodaje nową linię

output.innerHTML = '<br><br>'; 
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
  else if (celsius < -273.15) {
    output.innerHTML = ' '+celsius+' stopni Celsjusza?';
    output3.innerHTML = 'Taka temperatura nie jest fizycznie możliwa';
  }
  else {
    fahrenheit = CtoF(celsius);
    output.innerHTML = ' '+celsius+' stopni Celsjusza to '+fahrenheit+' stopni Fahrenheita!'
    water(celsius);
    }
});
   
button2.addEventListener('click', function(){
	
	fahrenheit2 = window.prompt('Podaj, proszę temperaturę w stopniach Fahrenheita');

  if (fahrenheit2 === null){
    output.innerHTML = 'Kliknięto "anuluj". Rezygnujesz?' + '<br><br>';
  } else {
      var fahrenheit2= fahrenheit2.replace (',', '.');
      if (isNaN(fahrenheit2))  {
        output.innerHTML = 'Wpisz tylko cyfry' + '<br><br>';
      } else if (fahrenheit2 === '') {
        output.innerHTML = 'Nic nie wpisano' + '<br><br>';
      } else if (fahrenheit2 < -459.67) {
          output.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita?';
	  output3.innerHTML = 'Taka temperatura nie jest fizycznie możliwa';
      } else {
        celsius2 = FtoC(fahrenheit2);
		output.innerHTML = ' '+fahrenheit2+' stopni Fahrenheita to '+celsius2+' stopni Celsjusza!'
		water(celsius2);
       }
    }
  });
