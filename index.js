let divContainerButton = document.getElementById("numerosCalc");
let resultViewport = document.getElementById("result-viewport");


for (let i = 9; i >= 0; i--) {
    let btn = document.createElement("button");
    btn.innerHTML = i;
    divContainerButton.appendChild(btn);
    btn.onclick = function () {
        resultViewport.value += btn.innerHTML;

    }
}

function suma(){
    resultViewport.value += "+";
}

function resta(){
    resultViewport.value += "-";
}

function multiplicacion(){
    resultViewport.value += "*";
}

function division(){
    resultViewport.value += "/";
}

function parentesisizq(){
    resultViewport.value += "(";
}

function parentesisder(){
    resultViewport.value += ")";
}

function potencia() {
    resultViewport.value += "**"
    }

function operacion(){
   try{
    resultViewport.value = eval(resultViewport.value);
   }
   catch(error){
       resultViewport.value ="Syntax error";
   }
    
}

function limpiar(){
    resultViewport.value = "";
}

