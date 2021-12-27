var frase = $('.frase').text();
var numPalavras = frase.split(" ").length; //Split => Divide a String em espaços.
var tamanhoFrase = $('#tamanho-frase')
tamanhoFrase.text(numPalavras)

var campo = $('.campo-digitacao')
campo.on('input', function(){ //Input atualiza enquanto o usuário seleciona o campo
    var conteudo = campo.val()

    var qtdPalavras = conteudo.split(/\S+/).length -1
    $('#contador-palavras').text(qtdPalavras)
    
    var qtdCaracteres = conteudo.length
    $('#contador-caracteres').text(qtdCaracteres)
})