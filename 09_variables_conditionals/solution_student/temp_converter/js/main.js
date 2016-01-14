$('#fahrenheit_to_celsius').on('click', function () {
  // var num1 = $('#num1').val(); 
  // var num1 = parseFloat(num1); 
  // if (num1 == num2) {
  //   $('#comparison').html('=');    
  // } else if (num1 > num2) {
  //   $('#comparison').html('>');
  // } else (num1 < num2) {
  //   $('#comparison').html('<'); 
  // }  
});

$('#celsius_to_fahrenheit').on('click', function () {
  var num1 = $('#num1').val(); 
  var num1 = parseFloat(num1); 

  if (num1 == num2) {
    $('#comparison').html('=');    
  } else if (num1 > num2) {
    $('#comparison').html('>'); 
  } else (num1 < num2) {
    $('#comparison').html('<'); 
  }
  
});


// user enters value
// 
// user clicks F to C
// initalVal = get value of input 
// resultVal = use formula of F to C to convert initialVal to C
// display the resultVal in #result 

// *with bonus
// if initialVal is blank
//    display error 
// else (if not blank)
// display resultVal in #result

// 
// user clicks C to F 
// initialVal = get value of input 
// resultVal = use formula of C to F to convert initialVal to F 
// display the resultVal in #result

// BONUS
// display error if input is blank \
// need to run this particular code within the click event 
// modify your blocks to include a conditional 