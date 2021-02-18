// Property of Caio Philipe
var title = document.querySelector(".title");

title.textContent = "Sumida Nutricionista";

var patients = document.querySelectorAll(".paciente");

var button = document.querySelector("#adicionar-paciente");

function imcCalc() {
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
}

imcCalc();

button.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-add");
    //start: Data from patient
    var name = form.nome.value;
    var weight = form.peso.value;
    var height = form.altura.value;
    var fat = form.gordura.value;
    //end: Data from patient

    var patientTr = document.createElement('tr');

    var nameTd = document.createElement("td");
    var weightTd = document.createElement("td");
    var heightTd = document.createElement("td");
    var fatTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nameTd.textContent = name;
    weightTd.textContent = weight;
    heightTd.textContent = height;
    fatTd.textContent = fat;
    imcTd.textContent = 0;

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);

    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(patientTr);

    patients = document.querySelectorAll(".paciente");

    imcCalc();

});