var filterField = document.querySelector("#filtrar-tabela");

filterField.addEventListener("input", function(){
    var patients = document.querySelectorAll(".paciente");
    if(this.value.length > 0){
        for (var i = 0; i < patients.length; i++) {
            var patient = patients[i];
            var tdName = patient.querySelector(".info-nome");
            var name = tdName.textContent;
            var expression = new RegExp(this.value, "i");

            if (!expression.test(name)) {
                patient.classList.add("invisivel");
            } else {
                patient.classList.remove("invisivel");
            }
        }
    }
    else{
        patients.forEach(function(patient){
            patient.classList.remove("invisivel");
        })
    }
    
})