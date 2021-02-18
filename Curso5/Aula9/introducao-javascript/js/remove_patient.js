var table = document.querySelector("#tabela-pacientes");
table.addEventListener("dblclick", function(event){
    /*var patient = table.querySelectorAll(".paciente");
    patient.forEach(function(patient) {
        patient.addEventListener("dblclick",removeObject);
    });*/
    event.target.parentNode.classList.add("fadeout");
    setTimeout(function(){
        event.target.parentNode.remove();
    }, 600);
});


/*function removeObject(){
    //console.log("Hello, I've been clicked");
    this.remove();
}*/