document.addEventListener("DOMContentLoaded", function() {
    
    var buttonMais = document.getElementById("botaoMais");
    var buttonMenos = document.getElementById("botaoMenos");
    var porcoesText = document.getElementById("porcoes");

    
    var porcoes = 1;

    
    function atualizarPorcoes() {
        porcoesText.textContent = porcoes.toString().padStart(2, '0'); 
    }

    
    buttonMais.addEventListener("click", function() {
        porcoes++;
        atualizarPorcoes();
    });

    
    buttonMenos.addEventListener("click", function() {
        if (porcoes > 1) {
            porcoes--;
            atualizarPorcoes();
        }
    });

    
    atualizarPorcoes();
});
