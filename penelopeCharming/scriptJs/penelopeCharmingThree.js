function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. 51. \n2. 40. `);


        if (opcao == 1) {
            window.location.href = "../penelopeCharming/winPenelope.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "../penelopeCharming/gameOverPenelope.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}