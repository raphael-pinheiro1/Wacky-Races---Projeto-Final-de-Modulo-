function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Poderia enxergar o que ele estava errando e se aperfeiçoar\n2. Ser orgulho e continuar com seu sua maneira de ser desleal. `);


        if (opcao == 1) {
            window.location.href = "dick/winDick.html";
            break;

        } else if (opcao == 2) {
            window.location.href = "/dick/gameOver_Dick.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}