alert('Olá mundo! Bem-vindo ao jogo do número secreto!');
let NumerusMaximus = 3000;
let secretNumber = parseInt(Math.random() * NumerusMaximus + 1);
let bet;
let tentativas = 1;

//Enquanto o chute não for igual ao número secreto..
while (bet != secretNumber) {
    bet = prompt('Escolha um número entre 1 e '+ NumerusMaximus);

    //Se bet for igual a secreNumber, será executado a frase mencionado abaixo
    if (bet == secretNumber) {
        break;
        
    } else {
        if (bet > secretNumber) {
            alert('O número secreto é menor que ' + bet);
        } else {
            alert('O número secreto é maior que ' + bet);
        }
        //tentativas = tentativas + 1;
        tentativas++;
    }


}
//Operador
let palavraTentativa = tentativas > 1? 'tentativas' : 'tentativa'
alert(`Tu acertaste a resposta! Descobriste o número secreto ${secretNumber} com ${tentativas} ${palavraTentativa}.`);
//if (tentativas > 1) {
//    alert(`Tu acertaste a resposta! Descobriste o número secreto ${secretNumber} com ${tentativas} tentativas`);
//} else {
    //alert(`Tu acertaste a resposta! Descobriste o número secreto ${secretNumber} com ${tentativas} tentativa`);
//}
