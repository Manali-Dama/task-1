
const questions = [
    {
      question: "What is 5 + 3?",
      options: ["5", "6", "7", "8"],
      correct: "8"
    },
    {
      question: "What is 12 - 7?",
      options: ["5", "6", "4", "3"],
      correct: "5"
    },
    {
      question: "What is 9 * 2?",
      options: ["16", "18", "20", "15"],
      correct: "18"
    },
    {
      question: "What is 15 ÷ 3?",
      options: ["5", "6", "4", "3"],
      correct: "5"
    },
    {
      question: "What is 25 + 10?",
      options: ["35", "30", "40", "45"],
      correct: "35"
    },
    {
      question: "What is 36 ÷ 6?",
      options: ["5", "6", "7", "8"],
      correct: "6"
    },
    {
      question: "What is 7 * 3?",
      options: ["19", "20", "21", "22"],
      correct: "21"
    },
    {
      question: "What is 50 - 28?",
      options: ["21", "22", "23", "25"],
      correct: "22"
    },
    {
      question: "What is 8 + 14?",
      options: ["22", "20", "24", "18"],
      correct: "22"
    },
    {
      question: "What is 100 ÷ 10?",
      options: ["10", "20", "15", "12"],
      correct: "10"
    }
  ];


let currentQuestion = 0;
let score = 0;

const progressBar = document.getElementById("progress-bar");
const progressImage = document.getElementById("progress-image");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const submitBtn = document.getElementById("submit-btn");
const breakpointsContainer = document.getElementById("breakpoints");

// Initialize breakpoints
function initializeBreakpoints() {
  questions.forEach((_) => {
    const breakpoint = document.createElement("div");
    breakpoint.classList.add("breakpoint");
    breakpointsContainer.appendChild(breakpoint);
  });
}

function loadQuestion() {
  const question = questions[currentQuestion];
  let questionNo = currentQuestion +1;
  document.getElementById("question").textContent =questionNo + ". " + question.question;
  optionsContainer.innerHTML = "";
  question.options.forEach(option => {
   optionElement = document.createElement("button");
  optionElement.innerHTML = `
      ${option}
    `;
    optionsContainer.appendChild(optionElement);
    optionElement.classList.add("option-btn");
    optionElement.style.backgroundColor ="white";
    optionElement.addEventListener("click",selectAns);
  });
}

function selectAns(event) {
  const selectedOption = event.target;  // Get the text of the clicked option
  const question = questions[currentQuestion];   // Get the current question object
  const isCorrect =selectedOption.innerText === question.correct;
  if (isCorrect) {
    selectedOption.style.backgroundColor = "rgb(21, 255, 0 ,0.5)";
    selectedOption.style.borderColor="rgb(47, 199, 33)";
    score++;

  } else {
    selectedOption.style.backgroundColor = "rgb(243, 56, 56 ,0.7)";
    selectedOption.style.borderColor="rgb(230, 16, 20)";
  }
  
  const options = document.querySelectorAll(".option-btn");
  options.forEach(option => {
    option.disabled = true;
  });
 

}


 

nextBtn.addEventListener("click", () => {
  const selectedOption = document.querySelector('#options .option-btn');
  if (!selectedOption) {
    alert("Please select an option!");
    return;
  }



  const answer = parseInt(selectedOption.value);
  const isCorrect = answer === questions[currentQuestion].correct;
  if (isCorrect) score++;

  function updateProgress(correct) {
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
     progressImage.style.left = `calc(${progressPercentage}%)`;
  
    const breakpoints = document.querySelectorAll(".breakpoint");
    breakpoints[currentQuestion].classList.add("active");
    breakpoints[currentQuestion].classList.add(correct ? "correct" : "incorrect");
  }


  updateProgress(isCorrect);
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    nextBtn.disabled = true;
    submitBtn.disabled = false;
  }
});

submitBtn.addEventListener("click", () => {
  alert(`Quiz completed! Your score is ${score}/${questions.length}`);
});

initializeBreakpoints();
loadQuestion();



// //.onclick="document.getElementById('test-form').style.display='block'";
// // document.getElementsByClassName('start').addEventListener('click',changeDisplay());

// // function changeDisplay()
// // {
// //     document.getElementById('test-section').style.display='flex';
// // }

// // const startTest=getElementById('show-form');
// // startTest.addEventListener(onclick,style.display='block');
// // let bttn = document.getElementsByClassName('start');
// // bttn.onclick = () => {
// //     document.getElementById('test-section').style.display='flex';
// // };



// const questions = [
//     {
//       question: "What is 5 + 3?",
//       options: ["5", "6", "7", "8"],
//       correctAnswer: "8"
//     },
//     {
//       question: "What is 12 - 7?",
//       options: ["5", "6", "4", "3"],
//       correctAnswer: "5"
//     },
//     {
//       question: "What is 9 * 2?",
//       options: ["16", "18", "20", "15"],
//       correctAnswer: "18"
//     },
//     {
//       question: "What is 15 ÷ 3?",
//       options: ["5", "6", "4", "3"],
//       correctAnswer: "5"
//     },
//     {
//       question: "What is 25 + 10?",
//       options: ["35", "30", "40", "45"],
//       correctAnswer: "35"
//     },
//     {
//       question: "What is 36 ÷ 6?",
//       options: ["5", "6", "7", "8"],
//       correctAnswer: "6"
//     },
//     {
//       question: "What is 7 * 3?",
//       options: ["19", "20", "21", "22"],
//       correctAnswer: "21"
//     },
//     {
//       question: "What is 50 - 28?",
//       options: ["21", "22", "23", "25"],
//       correctAnswer: "22"
//     },
//     {
//       question: "What is 8 + 14?",
//       options: ["22", "20", "24", "18"],
//       correctAnswer: "22"
//     },
//     {
//       question: "What is 100 ÷ 10?",
//       options: ["10", "20", "15", "12"],
//       correctAnswer: "10"
//     }
//   ];



// // const questionElement = document.getElementById("question");
// // questions.forEach((question,index) => {
// //     console.log("running for ",index);
// //     const currentQuestion = questions[index];
// //     questionElement.innerText = currentQuestion.question;
// // })


// let counter=0

// let btn=document.getElementById("btn");
// // btn.addEventListener("click", () => {
// //     // alert("Button clicked using addEventListener!");
    
//     const questionElement = document.getElementById("question");
//     const option1Element = document.getElementById("option1");
//     const option2Element = document.getElementById("option2");
//     const option3Element = document.getElementById("option3");
//     const option4Element = document.getElementById("option4");
//     const progressBar = document.getElementById("progress-bar");
//     const progressImage = document.getElementById("progress-image");
//     const nextBtn = document.getElementById("next-btn");
//     const submitBtn = document.getElementById("submit-btn");
//     const breakpointsContainer = document.getElementById("breakpoints");

//     function initializeBreakpoints() {
//       questions.forEach((_, index) => {
//         const breakpoint = document.createElement("div");
//         breakpoint.classList.add("breakpoint");
//         breakpointsContainer.appendChild(breakpoint);
//       });
//     }

//     function updateProgress(correct) {
//       const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;
//       progressBar.style.width = `${progressPercentage}%`;
//       progressImage.style.left = `calc(${progressPercentage}% - 15px)`;
    
//       const breakpoints = document.querySelectorAll(".breakpoint");
//       breakpoints[currentQuestion].classList.add("active");
//       breakpoints[currentQuestion].classList.add(correct ? "correct" : "incorrect");
//     }
    
//     nextBtn.addEventListener("click", () => {
//       const selectedOption = document.querySelector('input[name="option"]:checked');
//       if (!selectedOption) {
//         alert("Please select an option!");
//         return;
//       }
    
//       const answer = parseInt(selectedOption.value);
//       const isCorrect = answer === questions[currentQuestion].correct;
//       if (isCorrect) score++;
    
//       updateProgress(isCorrect);


//     const currentQuestion = questions[counter];
//     if (option1Element) {
//         option1Element.innerText = currentQuestion.options[0];
//       }
//       if (option2Element) {
//         option2Element.innerText = currentQuestion.options[1];
//       }
//       if (option3Element) {
//         option3Element.innerText = currentQuestion.options[2];
//       }
//       if (option4Element) {
//         option4Element.innerText = currentQuestion.options[3];
//       }
    
//     questionElement.innerText = currentQuestion.question;
//     counter++;
// });

// initializeBreakpoints();
// loadQuestion();


// // const questionElement = document.getElementById("question");
// // const currentQuestion = questions[0];
// // questionElement.innerText = currentQuestion.question;


  
// //   questions.forEach((question, index) => {
// //     console.log(`Question ${index + 1}: ${question.question}`);
// //     console.log(`Options: ${question.options.join(", ")}`);
// //     console.log(`Correct Answer: ${question.correctAnswer}`);
// // });
  
