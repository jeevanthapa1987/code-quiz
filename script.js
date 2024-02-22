
const questions = [
    {
      question: "What is the capital of France?",
      choices: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "Who wrote the Harry Potter series?",
      choices: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
      answer: "J.K. Rowling"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Venus", "Mars", "Jupiter", "Saturn"],
      answer: "Mars"
    },
    {
      question: "Who painted the Mona Lisa?",
      choices: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "Leonardo da Vinci"
    },
    {
      question: "What is the largest mammal?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippo"],
      answer: "Blue Whale"
    }
  ];
  
  let score = 0;
  let currentQuestion = 0;
  let timeLeft = 60; // Time in seconds
  let timerInterval;
  
  const startBtn = document.getElementById('start-btn');
  const questionContainer = document.getElementById('question-container');
  const scoreDisplay = document.getElementById('score');
  const timeDisplay = document.getElementById('time');
  
startBtn.addEventListener('click', startQuiz);
  
  function startQuiz() {
    startBtn.style.display = 'none';
    showQuestion();
    timerInterval = setInterval(updateTimer, 1000);
  }
  
  function showQuestion() {
    if (currentQuestion < questions.length) {
      const currentQ = questions[currentQuestion];
      const questionText = document.getElementById('question-text');
      const choicesContainer = document.getElementById('choices-container');
      questionText.textContent = currentQ.question;
      choicesContainer.innerHTML = ' ';
    

   currentQ.choices.forEach(choice => {
        const choiceBtn = document.createElement('button');
        choiceBtn.textContent = choice;
        choiceBtn.classList.add('choice-btn');
        choiceBtn.addEventListener('click', () => checkAnswer(choice, currentQ.answer));
        choicesContainer.appendChild(choiceBtn);
      });
    } else {
      endQuiz();
    }
  }
  
  function checkAnswer(userChoice, correctAnswer) {
    if (userChoice === correctAnswer) {
      score++;
      scoreDisplay.textContent = `Score: ${score}`;
    } else {
      timeLeft -= 10; // Subtract 10 seconds for wrong answer
    }
    currentQuestion++;
    showQuestion();
  }
  
  function updateTimer() {
    if (timeLeft > 0) {
      timeLeft--;
      timeDisplay.textContent = `${timeLeft} seconds`;
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    clearInterval(timerInterval);
    alert(`Quiz ended! Your score is ${score}`);
  }
  