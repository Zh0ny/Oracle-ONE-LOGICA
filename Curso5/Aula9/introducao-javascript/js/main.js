// Property of Caio Philipe
var title = document.querySelector(".title");

title.textContent = "Sumida Nutricionista";

var patients = document.querySelectorAll(".paciente");

function updateImc() {
    for (let index = 0; index < patients.length; index++) {
        var tempWeight = parseInt(patients[index].querySelector(".info-peso").textContent,10);
        var tempHeight = parseFloat(patients[index].querySelector(".info-altura").textContent,10);
    
        if (validateData(tempWeight, tempHeight)) {
            var tempIMC = imc(tempWeight, tempHeight);
            patients[index].querySelector(".info-imc").textContent = tempIMC;
        }else{
            patients[index].querySelector(".info-imc").textContent = "INV_IMC";
            patients[index].classList.add("patient-invalid");
        }
    }
}

function imc(weight, height) {
    var imc = 0;
    imc = weight/Math.pow(height,2);
    return imc.toFixed(2)
}

function validateData(tempWeight, tempHeight){
    var conditionTest = (validateWeight(tempWeight) && validateHeight(tempHeight));
    return conditionTest;
}

function validateWeight(tempWeight){
    var weightCondition = (tempWeight > 0 && tempWeight <= 1000);
    return weightCondition;
}

function validateHeight(tempHeight){
    var heightCondition = (tempHeight > 0 && tempHeight <= 3.00);
    return heightCondition;
}

updateImc();