

function verificarRespostas() {
    // precisa deixar em zero para fazer a contagem correta
    var pontuacao = 0;

    // Array contendo as respostas corretas
    var respostasCorretas = ['a', 'c', 'b', 'b', 'c', 'c', 'b', 'c', 'b', 'b'];

    // Itera sobre as perguntas e verifica as respostas do usuário
    for (var i = 1; i <= respostasCorretas.length; i++) {
        var respostaUsuario = document.getElementById('resposta' + i).value.toLowerCase();
        var respostaCorreta = respostasCorretas[i - 1];

        if (respostaUsuario === respostaCorreta) {
            pontuacao++;
        }
    }

    // Exibe o resultado
    var resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = 'Você acertou ' + pontuacao + ' de ' + respostasCorretas.length + ' perguntas.';

    // Verifica a pontuação e redireciona se necessário
    if (pontuacao >= 7) {
        alert("Parabéns, você passou!!");
        // Mostra o link se a pontuação for maior ou igual a 7
        document.getElementById('linkResultado').style.display = 'block';
        // mostra o texto se a pontuação for maior ou igual a 7
        document.getElementById('texto-parabens').style.display = 'block';
    } else {
        alert("Infelizmente sua nota foi menor que 7, terá que refazer a avaliação!");
        // Oculta o link se a pontuação for menor que 7
        document.getElementById('linkResultado').style.display = 'none';
        // exibir a mensagem que foi reprovado
        document.getElementById('texto-reprovado').style.display = 'block';

    }
}
