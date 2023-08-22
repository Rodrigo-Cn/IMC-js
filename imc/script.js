var entrada3 = document.querySelector("#entrada3");

entrada3.addEventListener("click",function(event){

    event.preventDefault();

    var entrada1 = Number(document.querySelector("#entrada1").value);
    var entrada2 = Number(document.querySelector("#entrada2").value);
    var resultado = entrada2/(entrada1*entrada1);

    var entrando = document.querySelector("#entrando");

    entrando.textContent = "IMC: "+resultado.toFixed(2);

});