let inputEL = document.getElementById("input-el");
const mybtnEL = document.getElementById("mybtn-el");
let input_arr = [];
let ulEL = document.getElementById("ul-el");
let delbtnEL = document.getElementById("mydelbtn-el");
let savetabsEL = document.getElementById("save_tabs-el");

savetabsEL.addEventListener("click",function(){
    chrome.tabs.query({active: true , currentwindow: true},function(){
        input_arr.push(tabs[0].url)
        localStorage.setItem("input_arr",JSON.stringify(input_arr));
        print_lists();
        
    }) 
        
    
})

mybtnEL.addEventListener("click",function(){
    input_arr.push(inputEL.value);
    clear_input();
    localStorage.setItem("input_arr",JSON.stringify(input_arr));
    
    print_lists();
})

delbtnEL.addEventListener("click",function(){
    localStorage.clear();
    input_arr=[];
    print_lists();
})

let input_localstorage = JSON.parse(localStorage.getItem("input_arr"));
 if(input_localstorage){
        input_arr = input_localstorage;
        print_lists();
 }
//to clear input after clicking the save input button
function clear_input(){
    inputEL.value = "";
}

//to print all strings in form of lists
function print_lists(){
    let listitems = "";
for(let i=0 ; i<input_arr.length ; i++){
   listitems += "<li><a target='_blank' href='#'>" + input_arr[i] + "</a></li>";
}
 ulEL.innerHTML = listitems;
}



