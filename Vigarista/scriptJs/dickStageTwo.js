function phaseOneDick () {
    while (opcao != 1 || opcao != 2) {
        var opcao = prompt (
            `Escolha uma das opções:\n1. Um salão de beleza.\n2. Uma loja de roupas. `);


        if (opcao == 1) {
            window.location.href = "../vigarista/stageThree_vigarista.html";
            break;

        } else if (opcao == 2) {
            alert(`A vaidade da Penelo Charmosa, fez com que ela se destraí-se com algo que não era importante no momento!`)
            window.location.href = "../vigarista/gameOver_vigarista.html";
            break;

        } else {
            alert (`Selecione a pergunta 1 ou 2.`);
        }
    }
}