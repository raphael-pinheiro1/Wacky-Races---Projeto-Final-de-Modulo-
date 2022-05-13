function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Fórmula 1. \n2. Corrida Maluca. `);


        if (opcao == 2) {
            window.location.href = "../rochaBrothers/gameOverBrothers.html";
            break;

        } else if (opcao == 1) {
            window.location.href = "../rochaBrothers/stageTwo_rochaBrothers.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}