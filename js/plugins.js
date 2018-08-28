
var numbers = document.getElementsByClassName("numbers");
var operators = document.getElementsByClassName('operators');
var del = document.getElementById("delet");
var display = document.getElementById('write');
var equal = document.getElementById("equal");
var result = "";

for (var i = 0; i < numbers.length; i++){
  numbers[i].onclick = function(){
    getValue(this);
  };
}

for (var i = 0; i < operators.length; i++){
  operators[i].onclick = function(){
    getValue(this);
  };
}


for (var i = 0; i < equal.length; i++){
    equal[i].onclick = function(){
        getValue(this);
    };
}
for (var i = 0; i <  del.length; i++){
   del[i].onclick = function(){
       getValue(this);
   } 
}


function getValue(element){
  result += element.innerHTML;
  display.innerHTML = result;
}


/*function opration(element) {
  if(equal === ){
     document.getElementById("equal") = eval(equal);
     }
}*/


function clean(){
   del.onclick = getValue;
}

/*function calculate(element){
    if(element.innerHTML == "+"){
       equal = numbers + numbers;
       }else if(element.innerHTML == "-"){
          equal =  numbers - numbers;
       }else if(element.innerHTML == "÷"){
          equal =  numbers ÷ numbers;
       }else if(element.innerHTML =="*"){
           equal = numbers * numbers;
       }else if(element.innerHTML == "%"){
           equal = numbers ÷ numbers * 100;
           numbers * 100;
       }
}calculate();*/
 

































// Avoid `console` errors in browsers that lack a console.
/*(function() {
  var method;
  var noop = function () {};
  var methods = [
    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
  ];
  var length = methods.length;
  var console = (window.console = window.console || {});

  while (length--) {
    method = methods[length];

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop;
    }
  }
}());

// Place any jQuery/helper plugins in here.*/


