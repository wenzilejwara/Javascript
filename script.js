
function calculate() {

  var num1 = (document.getElementById("numberOne").value);
  var num2 = (document.getElementById("numberTwo").value);

  if (num1.length == "")
  {
  num1 = 0;
  }
  else if(num2.length == "")
  {
    num2 = 0;
  }


  var result = parseInt(num1) + parseInt(num2);
  document.getElementById("add").innerHTML = result;

  var result = parseInt(num1) - parseInt(num2);
  document.getElementById("subtract").innerHTML = result;

  var result = parseInt(num1) * parseInt(num2);
  document.getElementById("multiply").innerHTML = result;

  var result = parseInt(num1) / parseInt(num2);
  document.getElementById("divide").innerHTML = result;
    
}

