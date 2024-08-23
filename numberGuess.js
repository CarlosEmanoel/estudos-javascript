const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const secretNumber = Math.floor(Math.random() * 10) + 1;

console.log("Bem-vindo ao Jogo de Adivinhação!");

let attempts = 0;

const greetings = () => {
    rl.question('Adivinhe um número entre 1 e 10: ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Você decidiu sair. Obrigado por jogar!");
            rl.close();
            return;
        }

        const guessedNumber = parseInt(input, 10);

        if (isNaN(guessedNumber)) {
            console.log("Por favor, digite um número válido.");
        } else {
            attempts += 1;
            if (guessedNumber === secretNumber) {
                console.log(`Parabéns! Você adivinhou o número correto em ${attempts} tentativas!`);
                rl.close();
            } else {
                console.log("Errado! Tente novamente.");
                if (guessedNumber < secretNumber) {
                    console.log("Dica: O número secreto é maior.");
                } else {
                    console.log("Dica: O número secreto é menor.");
                }
                greetings();
            }
        }
    });
};

greetings();
