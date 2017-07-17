
let number = document.querySelectorAll(".Number");
let operator = document.querySelectorAll(".operator");
let clear = document.querySelector(".Clear");
let viewer = document.querySelector(".Screen");
let equal = document.querySelector(".Equal");


let operations = "";

let number1 = "";
let calc = "";
let number2 = "";



for (var i = 0; i < number.length; i++) { // looping though numbers
  let currentVal = number[i];     // saving the number into a variable

  currentVal.addEventListener("click",  function(){ // adding event listener to the value
    let text = currentVal.innerText;          // takes the value and creates it as innerText
    operations += text;                      // assign this to operations so it puts it in the value of it
    viewer.textContent = operations;          // assign operations to viewer

    if (text === "+" || text === "-" || text === "X" || text === "/") {
      calc += text;
    }
    else {
      if (number1 !== "" && calc !==""){
        number2+= text;
      } else {
        number1 += text;
      }
    }
    console.log(number1);
    console.log(calc);
    console.log(number2);
  })
}





clear.addEventListener("click" , function() {

// RESETS ALL OF THE VARIABLES TO ZERO

    operations = "";
    number1 = "";
    calc = "";
    number2 = "";
    viewer.textContent = operations;
})

equal.addEventListener("click" , function () {
    let program = 0;
    switch (calc) {
      case "+":
        program = Number(number1) + Number(number2);
        break;
      case "-":
        program = Number(number1) - Number(number2);
        break;
      case "X":
        program = Number(number1) * Number(number2);
        break;
      case "/":
        program = Number(number1) / Number(number2)
        break;
      }
    viewer.textContent = program;

})



//
