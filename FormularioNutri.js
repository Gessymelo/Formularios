const btn = document.querySelector('#submitbtn');


btn.addEventListener("click", function(event) {
    event.preventDefault();

    const formulario =document.querySelector("#myform");
    formulario.nome = document.getElementById("nome").value;
    formulario.sobrenome = document.getElementById("sobrenome").value;

    formulario.reset();
   



    
    

})

