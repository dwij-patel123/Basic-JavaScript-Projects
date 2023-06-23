const quiz_data = [
    {
        question: "How old is Florin",
        a: "10",
        b: "12",
        c: "26",
        d: "110",
        correct: "c",
    },
    {
        question: "Which programming language is the best in 2019",
        a: "C",
        b: "Python",
        c: "JavaScript",
        d: "Java",
        correct: "d",
    },
    {
        question:"Who invented light bulb",
        a:"Thomas Alva Edison",
        b:"Alexander Fleming",
        c:"Nicholas Tesla",
        d:"Alexander Graham Bell",
        correct:"a",
    },
    {
        question:"Which is the best IDE",
        a:"VS Code",
        b:"Code Blocks",
        c:"Repl",
        d:"Programiz",
        correct:"b",
    },
    {
        question:"Which best FrameWork of JavaScript is best for frontEnd Development",
        a:"ReactJS",
        b:"Angular",
        c:"Vue.js",
        d:"CSS",
        correct:"a",
    }
]

const q_header = document.querySelector(".question");
const btnEL = document.querySelector(".btn");
const answerEL = document.querySelectorAll(".answer");
const quiz_container = document.querySelector(".quiz-container");

let count = 0;
let score = 0;

function deSelect(){
    answerEL.forEach(function(item){
        item.checked = false;
    })
}

function LoadQuiz(curr_que){
    deSelect();
    
    q_header.textContent = quiz_data[curr_que].question;

    const option_a = document.querySelector("#q_a");
    const option_b = document.querySelector("#q_b");
    const option_c = document.querySelector("#q_c");
    const option_d = document.querySelector("#q_d");

    option_a.textContent = quiz_data[curr_que].a;
    option_b.textContent = quiz_data[curr_que].b;
    option_c.textContent = quiz_data[curr_que].c;
    option_d.textContent = quiz_data[curr_que].d;
    
    

}

LoadQuiz(count);

btnEL.addEventListener("click",function(){

    
        answerEL.forEach(function(item){
            

            if(item.checked){
                if(item.dataset.id === quiz_data[count].correct){
                    score++;  
                }
                count++;

                if(count < quiz_data.length){
                    LoadQuiz(count);
                }else{
                    quiz_container.innerHTML = `<h2>You got ${score}/${quiz_data.length} correct</h2>
                                                 <button onclick="location.reload()">Reload</button>`;

                }
            }
        }); 
    
    
});


