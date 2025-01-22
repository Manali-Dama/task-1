//.onclick="document.getElementById('test-form').style.display='block'";
// document.getElementsByClassName('start').addEventListener('click',changeDisplay());

// function changeDisplay()
// {
//     document.getElementById('test-section').style.display='flex';
// }

// const startTest=getElementById('show-form');
// startTest.addEventListener(onclick,style.display='block');
// let bttn = document.getElementsByClassName('start');
// bttn.onclick = () => {
//     document.getElementById('test-section').style.display='flex';
// };



const questions = [
    {
      question: "What is 5 + 3?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "8"
    },
    {
      question: "What is 12 - 7?",
      options: ["5", "6", "4", "3"],
      correctAnswer: "5"
    },
    {
      question: "What is 9 * 2?",
      options: ["16", "18", "20", "15"],
      correctAnswer: "18"
    },
    {
      question: "What is 15 ÷ 3?",
      options: ["5", "6", "4", "3"],
      correctAnswer: "5"
    },
    {
      question: "What is 25 + 10?",
      options: ["35", "30", "40", "45"],
      correctAnswer: "35"
    },
    {
      question: "What is 36 ÷ 6?",
      options: ["5", "6", "7", "8"],
      correctAnswer: "6"
    },
    {
      question: "What is 7 * 3?",
      options: ["19", "20", "21", "22"],
      correctAnswer: "21"
    },
    {
      question: "What is 50 - 28?",
      options: ["21", "22", "23", "25"],
      correctAnswer: "22"
    },
    {
      question: "What is 8 + 14?",
      options: ["22", "20", "24", "18"],
      correctAnswer: "22"
    },
    {
      question: "What is 100 ÷ 10?",
      options: ["10", "20", "15", "12"],
      correctAnswer: "10"
    }
  ];



// const questionElement = document.getElementById("question");
// questions.forEach((question,index) => {
//     console.log("running for ",index);
//     const currentQuestion = questions[index];
//     questionElement.innerText = currentQuestion.question;
// })


let counter=0

let btn=document.getElementById("btn");
btn.addEventListener("click", () => {
    // alert("Button clicked using addEventListener!");
    
    const questionElement = document.getElementById("question");
    const option1Element = document.getElementById("option1");
    const option2Element = document.getElementById("option2");
    const option3Element = document.getElementById("option3");
    const option4Element = document.getElementById("option4");
    const currentQuestion = questions[counter];
    if (option1Element) {
        option1Element.innerText = currentQuestion.options[0];
      }
      if (option2Element) {
        option2Element.innerText = currentQuestion.options[1];
      }
      if (option3Element) {
        option3Element.innerText = currentQuestion.options[2];
      }
      if (option4Element) {
        option4Element.innerText = currentQuestion.options[3];
      }
    
    questionElement.innerText = currentQuestion.question;
    counter++;
});


// const questionElement = document.getElementById("question");
// const currentQuestion = questions[0];
// questionElement.innerText = currentQuestion.question;


  
//   questions.forEach((question, index) => {
//     console.log(`Question ${index + 1}: ${question.question}`);
//     console.log(`Options: ${question.options.join(", ")}`);
//     console.log(`Correct Answer: ${question.correctAnswer}`);
// });
  