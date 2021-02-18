var button = document.querySelector("#adicionar-paciente");

button.addEventListener("click", function(event) {
    event.preventDefault();
    
    var form = document.querySelector("#form-add");
    //start: Data from patient
    
    //end: Data from patient
    var patient = getPacientData(form);
    //start: Create Elements
    var patientTr = createTr(patient);
    //end: Create Elements
    var error = validatePatient(patient);
    showMessageError(error);
    if(error.length > 0){
        //alert("invalid patient");
        return;
    }
    //send to table
    var table = document.querySelector("#tabela-pacientes");

    table.appendChild(patientTr);

    patients = document.querySelectorAll(".paciente");

    form.reset();
});

function getPacientData(form) {
    var patient = {
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: imc(form.peso.value, form.altura.value)
    }

    return patient;
}

function createTr(patient) {
    var patientTr = document.createElement('tr');
    patientTr.classList.add('paciente');

    var nameTd = createTd(patient.name,"info-nome");
    var weightTd = createTd(patient.weight,"info-peso");
    var heightTd = createTd(patient.height,"info-altura");
    var fatTd = createTd(patient.fat,"info-gordura");
    var imcTd = createTd(patient.imc,"info-imc");

    patientTr.appendChild(nameTd);
    patientTr.appendChild(weightTd);
    patientTr.appendChild(heightTd);
    patientTr.appendChild(fatTd);
    patientTr.appendChild(imcTd);

    return patientTr;
}

function createTd(data, classe) {
    td = document.createElement("td");
    td.textContent = data;
    td.classList.add(classe);
    return td;
}

function showMessageError(error){
    var ul = document.querySelector("#error-message");
    ul.innerHTML = "";
    error.forEach(function(IndexError){
        var li = document.createElement("li");
        li.textContent = IndexError;
        ul.appendChild(li);
    });
}

function validatePatient(patient){
    var errorArray = [];
    if(patient.name.length <= 0) errorArray.push("Nome está incorreto ou em branco");
    if(patient.fat.length <= 0) errorArray.push("Gordura está incorreta ou em branco");
    if(!validateWeight(patient.weight)) errorArray.push("Peso está incorreto ou em branco");
    if(!validateHeight(patient.height)) errorArray.push("Altura está incorreta ou em branco");
    return errorArray;
}