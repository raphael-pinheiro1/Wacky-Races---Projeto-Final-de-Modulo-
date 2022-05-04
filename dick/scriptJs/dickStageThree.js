function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Ele ganhou todas as corridas.\n2. nunca ganhou uma corrida. `);


        if (opcao == 1) {
            window.location.href = "../";
            break;

        } else if (opcao == 2) {
            window.location.href = "../";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}