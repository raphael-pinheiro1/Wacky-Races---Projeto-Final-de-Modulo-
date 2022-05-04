function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Capitão Caverna. \n2. Capitão Rocha.`);


        if (opcao == 1) {
            window.location.href = "/rochaBrothers/stageThree_rochaBrothers.html";
            
            break;

        } else if (opcao == 2) {
            window.location.href = "/rochaBrothers/gameOverBrothers.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        } 
    }
}