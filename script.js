

function onAddClick() {

 var num1 = parseInt (document.getElementById("numberOne").value);
 var num2 = parseInt (document.getElementById("numberTwo").value);

var result = num1 + num2;
   
document.getElementById("result").innerHTML = result;
   
}
function onSubract() {

  var num1 = parseInt(document.getElementById("numberOne").value);
  var num2 = parseInt(document.getElementById("numberTwo").value);
 
  var result = num1 - num2;
    
 document.getElementById("result").innerHTML = result;
    
}

function onMultiply() {

  var num1 = parseInt(document.getElementById("numberOne").value);
  var num2 = parseInt(document.getElementById("numberTwo").value);
 
  var result = num1 * num2;
    
 document.getElementById("result").innerHTML = result;
}


function onDivide() {

  var num1 = parseInt (document.getElementById("numberOne").value);
  var num2 = parseInt (document.getElementById("numberTwo").value);
 
  var result = num1 / num2;
    
 document.getElementById("result").innerHTML = result;
}

