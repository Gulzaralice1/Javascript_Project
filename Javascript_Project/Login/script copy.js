const quizQuestions = [
    "➕ What is 1 + 2? 🤔",
    "🐱 Count and write the number: 🐱🐱🐱",
    "🔢 What comes after 5? ➡️",
    "🔢 Write the biggest number: 3️⃣, 7️⃣, 2️⃣",
    "🔳 How many sides does a square have? ✏️",
    "✍️ Fill in the blank: 'I ___ a boy/girl.' (am/is)",
    "🍏 Write the first letter of the word 'Apple'.",
    "🔄 What is the opposite of big? 🔄",
    "🍽️ Name one thing we eat. 🍎",
    "👀 What do we use to see? (👀 Eyes or 👂 Ears?)"
];

const quizAnswers = [
    "3",
    "3",
    "6",
    "7",
    "4",
    "am",
    "A",
    "small",
    "Apple",
    "Eyes"
];

let questionNo = 0;
let score = 0;

function checkAnswer() {
    const answerInput = document.getElementById("answerInput");
    let userAnswer = answerInput.value.trim(); // Get user input and trim spaces
    let correctAnswer = quizAnswers[questionNo]; // Get correct answer for current question

    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
        score++;
        document.getElementById("feedback").textContent = "✅ Correct!";
        document.getElementById("feedback").classList.add("correct");
    } else {
        document.getElementById("feedback").textContent = `❌ Wrong! Correct Answer: ${correctAnswer}`;
        document.getElementById("feedback").classList.remove("correct");
    }

    // Clear input field
    answerInput.value = "";

    // Move to the next question
    questionNo++;

    // If all questions are done
    if (questionNo >= quizQuestions.length) {
        document.getElementById("question").textContent = `Quiz Over! 🎉 Your Score: ${score}/${quizQuestions.length}`;
        document.getElementById("answerInput").style.display = "none";
        document.getElementById("nextBtn").style.display = "none";
        document.getElementById("feedback").classList.remove("correct");
        document.getElementById("feedback").textContent = "";
        return;
    }

    // Display next question
    document.getElementById("question").textContent = `Q No ${questionNo + 1}: ${quizQuestions[questionNo]}`;
}

function nextQuestion() {
    checkAnswer(); // Check current question and move to the next one
}

// Display first question initially
document.getElementById("question").textContent = `Q No 1: ${quizQuestions[0]}`;

    