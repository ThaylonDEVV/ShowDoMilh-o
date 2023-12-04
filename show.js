const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let playerName = '';
let currentRound = 0;
let prizeMoney = 0;

const questions = [
  {
    question: 'Qual é a capital do Brasil?',
    options: ['São Paulo', 'Rio de Janeiro', 'Brasília'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Qual é a moeda do Japão?',
    options: ['Dólar', 'Euro', 'Iene'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Quem pintou o quadro "Mona Lisa"?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso'],
    correctAnswer: 1,
    prize: 100
  },
  {
    question: 'Qual é o maior planeta do sistema solar?',
    options: ['Terra', 'Júpiter', 'Marte'],
    correctAnswer: 1,
    prize: 100
  },
  {
    question: 'Quem escreveu "Dom Quixote"?',
    options: ['Miguel de Cervantes', 'William Shakespeare', 'Charles Dickens'],
    correctAnswer: 0,
    prize: 100
  },
  // Adicione mais perguntas aqui
  {
    question: 'Qual é o maior oceano do mundo?',
    options: ['Oceano Atlântico', 'Oceano Índico', 'Oceano Pacífico'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Quem foi o primeiro presidente do Brasil?',
    options: ['Getúlio Vargas', 'Juscelino Kubitschek', 'Deodoro da Fonseca'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Qual é a capital da Austrália?',
    options: ['Sydney', 'Melbourne', 'Canberra'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Quem foi o inventor da lâmpada elétrica?',
    options: ['Thomas Edison', 'Nikola Tesla', 'Alexander Graham Bell'],
    correctAnswer: 0,
    prize: 100
  },
  {
    question: 'Qual é o maior animal terrestre?',
    options: ['Elefante Africano', 'Girafa', 'Hipopótamo'],
    correctAnswer: 0,
    prize: 100
  },
  {
    question: 'Quem foi o primeiro homem a pisar na Lua?',
    options: ['Neil Armstrong', 'Buzz Aldrin', 'Yuri Gagarin'],
    correctAnswer: 0,
    prize: 100
  },
  {
    question: 'Qual é o metal mais caro do mundo?',
    options: ['Ouro', 'Platina', 'Ródio'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Quem pintou a obra "Guernica"?',
    options: ['Pablo Picasso', 'Salvador Dalí', 'Vincent van Gogh'],
    correctAnswer: 0,
    prize: 100
  },
  {
    question: 'Qual é o país mais populoso do mundo?',
    options: ['Índia', 'Estados Unidos', 'China'],
    correctAnswer: 2,
    prize: 100
  },
  {
    question: 'Quem foi o fundador da Microsoft?',
    options: ['Steve Jobs', 'Bill Gates', 'Jeff Bezos'],
    correctAnswer: 1,
    prize: 100
  }
];

function startGame() {
  rl.question('Qual é o seu nome? ', (answer) => {
    playerName = answer;
    console.log(`Olá ${playerName}, bem-vindo ao jogo!`);
    nextRound();
  });
}

function nextRound() {
  if (currentRound < questions.length) {
    const currentQuestion = questions[currentRound];
    console.log(`Rodada ${currentRound + 1}: ${currentQuestion.question}`);
    currentQuestion.options.forEach((option, index) => {
      console.log(`${index + 1}. ${option}`);
    });
    rl.question('Escolha a resposta correta (1-3): ', (answer) => {
      if (parseInt(answer) === currentQuestion.correctAnswer + 1) {
        console.log('Resposta correta!');
        prizeMoney += currentQuestion.prize;
      } else {
        console.log('Resposta errada!');
      }
      currentRound++;
      nextRound();
    });
  } else {
    endGame();
  }
}

function endGame() {
  console.log(`Fim do jogo, ${playerName}! Você ganhou ${prizeMoney}!`);
  rl.question('Gostaria de jogar novamente? (s/n) ', (answer) => {
    if (answer.toLowerCase() === 's') {
      currentRound = 0;
      prizeMoney = 0;
      startGame();
    } else {
      rl.close();
    }
  });
}

startGame();