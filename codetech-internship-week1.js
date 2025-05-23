const questions = [
      {
        question: "What is the capital of France?",
        answers: ["Paris", "London", "Rome", "Berlin"],
        correct: 0
      },
      {
        question: "Which language runs in a web browser?",
        answers: ["Java", "C", "Python", "JavaScript"],
        correct: 3
      },
      {
        question: "What does CSS stand for?",
        answers: ["Central Style Sheets", "Cascading Style Sheets", "Cascading Simple Sheets", "Cars SUVs Sailboats"],
        correct: 1
      }
    ];

    let currentQuestionIndex = 0;

    function showQuestion() {
      const questionData = questions[currentQuestionIndex];
      document.getElementById('question').textContent = questionData.question;
      const answersDiv = document.getElementById('answers');
      answersDiv.innerHTML = '';
      document.getElementById('feedback').textContent = '';
      document.getElementById('next').style.display = 'none';

      questionData.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answersDiv.appendChild(btn);
      });
    }

    function selectAnswer(index) {
      const questionData = questions[currentQuestionIndex];
      const buttons = document.querySelectorAll('#answers button');
      buttons.forEach((btn, i) => {
        btn.disabled = true;
        if (i === questionData.correct) {
          btn.classList.add('correct');
        } else if (i === index) {
          btn.classList.add('wrong');
        }
      });

      document.getElementById('feedback').textContent = index === questionData.correct ? 'Correct!' : 'Wrong!';
      document.getElementById('next').style.display = 'inline-block';
    }

    document.getElementById('next').addEventListener('click', () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
      } else {
        document.querySelector('.quiz-container').innerHTML = '<h2>Quiz Completed!</h2>';
      }
    });

    showQuestion();
  
