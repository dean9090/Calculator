
let number = document.querySelectorAll(".Number");
let operator = document.querySelectorAll(".operator");
let clear = document.querySelector(".Clear");
let viewer = document.querySelector(".Screen");
let equal = document.querySelector(".Equal");


let operations = "";

for (var i = 0; i < number.length; i++) { // looping though numbers
  let currentVal = number[i];     // saving the number into a variable

  currentVal.addEventListener("click", () =>{ // adding event listener to the value
    let text = currentVal.innerText;          // takes the value and creates it as innerText
    operations += text;                       // assign this to operations so it puts it in the value of it
    viewer.textContent = operations;          // assign operations to viewer
  })
}

for (var i = 0; i < operator.length; i++) {
  let math = operator[i];

  math.addEventListener("click", function(){
    let show = math.innerText;

    if (show === "X") {
      operations += "*"
    }
    else {operations += show;}
    viewer.textContent = operations;
  })
}

clear.addEventListener("click" , function() {
    operations = "";
    viewer.textContent = operations;
})

equal.addEventListener("click" , function () {
    let program = eval(operations).toString();            // 
    viewer.textContent = program;

})





//
