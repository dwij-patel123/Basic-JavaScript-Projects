const jokeEL = document.querySelector(".joke-text");
const btn = document.querySelector(".joke-btn");
const joke_mainEL = document.querySelector(".joke-main");
const contentEL = document.querySelector(".content");
const toggle_btn = document.querySelector(".mode-btn");


const url = "https://icanhazdadjoke.com/";

//for dark mode toggle button;
let arr = [];
let bool = "false";

let value = JSON.parse(localStorage.getItem("dark_mode"));
if(value.includes("true")){
    arr = value;
    joke_mainEL.classList.add("dark-mode");
    toggle_btn.classList.add("dark-mode");
    contentEL.classList.add("dark-mode-alt");
    btn.classList.add("dark-mode-alt");

} 

function has_class(para){
    if(para.classList.contains("dark-mode")){
        arr = [];
        localStorage.setItem("dark_mode",JSON.stringify(arr)); 
        para.classList.remove("dark-mode");
    }else{
        bool = "true";
        arr.push(bool);
        localStorage.setItem("dark_mode",JSON.stringify(arr)); 
        para.classList.add("dark-mode");
    }   
}

function has_class_alt(para){
    if(para.classList.contains("dark-mode-alt")){
        arr = [];
        localStorage.setItem("dark_mode",JSON.stringify(arr));
        para.classList.remove("dark-mode-alt");
    }else{
        
        para.classList.add("dark-mode-alt");
    }
}

toggle_btn.addEventListener("click",function(){
    has_class(joke_mainEL);
    has_class_alt(contentEL);
    has_class(toggle_btn);
    has_class_alt(btn);
    
});

//for fetching data and displaying a random joke

btn.addEventListener("click",function(){
    print_data();
});

async function fetch_joke(){
    const response = await fetch(url,{
        headers: {
          Accept: 'application/json',
        },
      });
      const data = response.json();
      return data;
}try {
    
} catch (error) {
    console.log(error);
}

function print_data(){
    fetch_joke().then(function(e){
        const {joke} = e;
        let val = joke;
        jokeEL.textContent = val;
    });
}




