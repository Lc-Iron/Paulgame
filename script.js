const questions = [
  {
    question: "Qual a bebida favorita do Lucas?",
    options: ["Coca", "Água", "Suco de Laranja", "Jurupinga", "Café"],
    correct: 0
  },
  {
    question: "Qual banda favorita dele?",
    options: ["SOAD", "Linkin Park", "Iron Maiden", "The Killers", "Massacration"],
    correct: 3
  },
  {
    question: "Qual dia ele nasceu?",
    options: ["06/06/1993", "09/06/1994", "10/06/1994", "10/06/1993", "09/06/1993"],
    correct: 4
  },
  {
    question: "Onde vocês se viram a primeira vez?",
    options: ["Vídeo Chamada", "Casa da Cris", "Rio das Ostras", "BrScan na entrevista", "McDonalds"],
    correct: 3
  },
  {
    question: "Quantos abraços, catucadas no suvaco, conselhos e atendimentos somados, ele já te deu?",
    options: ["1000", "43", "322", "4010", "Imensurável"],
    correct: -1 // Any answer is correct
  }
];

let currentQuestionIndex = 0;

function loadQuestion() {
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');

  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  optionsElement.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const div = document.createElement('div');
    div.className = 'option';
    div.innerHTML = `<button onclick="checkAnswer(${index})">(${String.fromCharCode(97 + index)}) ${option}</button>`;
    optionsElement.appendChild(div);
  });
}

function checkAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion.correct === -1 || selectedIndex === currentQuestion.correct) {
    showConfetti();
    document.getElementById('result').textContent = "Parabéns! Você está quase chegando no prêmio!";
    document.getElementById('result').classList.remove('hidden');
    
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
      loadQuestion();
    } else {
      endGame();
    }
  } else {
    alert("Resposta errada! Tente novamente.");
  }
}

function endGame() {
  document.getElementById('quiz').classList.add('hidden');
  document.getElementById('result').innerHTML = `
    <div class="final-message">Parabéns!!! 🎉 Você é a melhor cunhada do mundo! Você ganhou um Vale Big Tasty até 31/01!</div>
    <img src="https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kDX8k9xx/200/200/original?country=br" alt="Você acaba de ganhar um Vale Big Tasty de Natal">
  `;
  document.getElementById('result').classList.remove('hidden');
  showConfetti();
}

function showConfetti() {
  const canvas = document.getElementById('confetti');
  canvas.classList.remove('hidden');
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Start the quiz
loadQuestion();
