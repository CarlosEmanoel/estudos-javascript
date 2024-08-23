const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Bem vindo ao jogo da frolesta!");

const greetings = () => {
    rl.question('Você está perdido na floresta com uma mochila, o que vai fazer? ', (input) => {
        if (input.toLowerCase() === 'sair') {
            console.log("Você decidiu sair. Obrigado por jogar!");
            rl.close();
            return;
        }

        if (input === "Esquerda") {
            console.log("Você andou para a esquerda");
            greetings();
        } else {
            if (input === "Facão") {
                console.log(`Você agora tem um facão e pode se defender.`);
                greetings();
            } else if (input === "Machado") {
                console.log(`Você agora tem um machado e pode cortar arvores.`);
                console.log(`Madeira + 4`);
                greetings();
            } else if (input === "Água") {
                console.log("Amigão, não tem água, tem que procurar!");
                greetings();
            } else {
                console.log("Esta opção não existe");
                greetings();
            }
        }
    });
};

greetings();
