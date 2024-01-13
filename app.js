const input = document.querySelector("input");
function printCalculator(button) {
    if (input.value === ""){
        if (button != "+" && button != "-" && button != "*" && button != "/" && button != ")"){
            input.value += button
        }
    }else if (input.value[input.value.length - 1] === "+" || input.value[input.value.length - 1] === "-" || input.value[input.value.length - 1] === "*" || input.value[input.value.length - 1] === "/" || input.value[input.value.length - 1] === "("){
        if(button != "+" && button != "-" && button != "*" && button != "/" && button != ")"){
            input.value += button
        }
    }else{
        input.value += button
    }
}
function clearCalculator() {
  input.value = "";
}
function sendCalculator() {
  if (!(input.value === "")){
    let result = eval(input.value);
    input.value = result;
  }
}
