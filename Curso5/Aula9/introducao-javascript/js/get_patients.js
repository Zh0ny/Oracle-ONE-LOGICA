var addButton = document.querySelector("#buscar-pacientes");

addButton.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){

        if(xhr.status == 200){
            var patients = JSON.parse(xhr.responseText);
            patients.forEach(function(patient){
                addPatient(patient);
            });
            document.querySelector("#error-help").classList.add("invisivel");
        }else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            document.querySelector("#error-help").classList.remove("invisivel");
        }
        
        
    });
    console.log("is working");
    
    xhr.send();
});