function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Para pra por gasolina. \n2. Batem no motor com o porrete. `);


        if (opcao == 1) {
            window.location.href = "/rochaBrothers/gameOverBrothers.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "/rochaBrothers/winBrothers.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}