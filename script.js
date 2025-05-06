const riddles = [
  { question: "¿Qué tiene cabeza pero no tiene cuerpo?", answer: "ajo" },
  { question: "Mientras más le quitas, más grande se vuelve. ¿Qué es?", answer: "agujero" },
  { question: "¿Qué va hacia arriba pero nunca baja?", answer: "edad" }
];

let currentRiddleIndex = Math.floor(Math.random() * riddles.length);

document.getElementById("riddle").innerText = riddles[currentRiddleIndex].question;

function checkAnswer() {
  const userAnswer = document.getElementById("answer").value.trim().toLowerCase();
  const feedback = document.getElementById("feedback");

  if (userAnswer === riddles[currentRiddleIndex].answer) {
    feedback.innerText = "¡Correcto! 🎉";
    feedback.style.color = "green";
  } else {
    feedback.innerText = "Incorrecto. Intenta de nuevo.";
    feedback.style.color = "black";
  }
}

document.getElementById("imageUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").style.backgroundImage = `url('${e.target.result}')`;
    };
    reader.readAsDataURL(file);
  }
});

  