var tempoInicial = $('#tempo-digitacao').text()
var campo = $('.campo-digitacao')

$( //Atalho para Document .ready
    function () {
        inicializaContadores()
        inicializaCronometro()
        $("#botao-reiniciar").click(reiniciaJogo)
    })

function inicializaContadores() {

    campo.on('input', function () { //Input atualiza enquanto o usuário seleciona o campo
        var conteudo = campo.val()

        var qtdPalavras = conteudo.split(/\S+/).length - 1
        $('#contador-palavras').text(qtdPalavras)

        var qtdCaracteres = conteudo.length
        $('#contador-caracteres').text(qtdCaracteres)
    })
}

function inicializaCronometro() {
    var tempoRestante = $('#tempo-digitacao').text()
    campo.one('focus', function () {
        var cronometroID = setInterval(() => {
            tempoRestante--;
            $('#tempo-digitacao').text(tempoRestante)
            if (tempoRestante < 1) {
                campo.attr('disabled', true)
                clearInterval(cronometroID)
                campo.addClass('campo-desativado')
            }
        }, 1000);
    })
}

function reiniciaJogo() {
    campo.attr('disabled', false)
    campo.val('')
    $('#contador-palavras').text('0')
    $('#contador-caracteres').text('0')
    $("#tempo-digitacao").text(tempoInicial)
    inicializaCronometro()
}

