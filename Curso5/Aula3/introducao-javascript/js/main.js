// Property of Caio Philipe
var title = document.querySelector(".title");

title.textContent = "Sumida Nutricionista";

var patients = document.querySelectorAll(".paciente");

for (let index = 0; index < patients.length; index++) {
    var tempWeight = parseInt(patients[index].querySelector(".info-peso").textContent,10);
    var tempHeight = parseFloat(patients[index].querySelector(".info-altura").textContent,10);

    if (!((tempWeight <= 0 || tempWeight > 1000) || (tempHeight <= 0 || tempHeight > 3.00))) {
        var tempIMC = tempWeight/Math.pow(tempHeight,2);
        patients[index].querySelector(".info-imc").textContent = tempIMC.toFixed(2);
    }else{
        patients[index].querySelector(".info-imc").textContent = "INV_IMC";
        patients[index].classList.add("patient-invalid");
    }
}