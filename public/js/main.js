var frase = $('.frase').text();
var numPalavras = frase.split(" ").length; //Split => Divide a String em espaços.
var tamanhoFrase = $('#tamanho-frase')

tamanhoFrase.text(numPalavras)
