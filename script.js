'use strict';

var output = document.getElementById('greeter-output');

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
    fahrenheit = 1.8 * +celsius+ + 32;
    
	if  (celsius <= 0 && celsius >= -273.15) {
    output.innerHTML = ' '+celsius+' stopni Celsjusza to '+fahrenheit+' stopni Fahrenheita! W tej temperaturze woda przyjmuje postać lodu' + '<br><br>';
  }
   else if  (celsius < -273.15) {
    output.innerHTML = ' '+celsius+' stopni Celsjusza? Taka temperatura nie jest fizycznie możliwa' + '<br><br>';
  }
  else if (celsius > 0 && celsius < 100) {
    output.innerHTML = ' '+celsius+' stopni Celsjusza to '+fahrenheit+' stopni Fahrenheita! W tej temperaturze woda jest cieczą' + '<br><br>';
  }
  else if (celsius >= 100) {
    output.innerHTML = ' '+celsius+' stopni Celsjusza to '+fahrenheit+' stopni Fahrenheita! W tej temperaturze woda zamienia się w parę.' + '<br><br>';
  }
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
        celsius2 = (+fahrenheit2+ - 32)/1.8;
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
