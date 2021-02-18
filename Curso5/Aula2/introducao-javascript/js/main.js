// Property of Caio Philipe
var title = document.querySelector(".title");

title.textContent = "Sumida Nutricionista";

var patient = document.querySelectorAll(".paciente");

for (let index = 0; index < patient.length; index++) {
    var tempWeight = parseInt(patient[index].querySelector(".info-peso").textContent,10);
    var tempHeight = parseFloat(patient[index].querySelector(".info-altura").textContent,10);

    if (!((tempWeight <= 0 || tempHeight > 1000) || (tempHeight <= 0 || tempHeight > 3.00))) {
        var tempIMC = tempWeight/Math.pow(tempHeight,2);
        patient[index].querySelector(".info-imc").textContent = tempIMC;
    }else{
        patient[index].querySelector(".info-imc").textContent = "INV_IMC";
    }
    

}