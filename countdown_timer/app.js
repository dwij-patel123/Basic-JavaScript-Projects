const days = document.querySelector(".days-count");
const hours = document.querySelector(".hours-count");
const min = document.querySelector(".mins-count");
const sec = document.querySelector(".sec-count");
const mainEL = document.querySelector(".count-main");


setInterval(displayDate,1000);

function displayDate(){
    let finalDate = new Date(2024,0,1);
    let final_ms = finalDate.getTime();
    let currDate = new Date();
    let curr_ms = currDate.getTime();
    let diff = final_ms-curr_ms;
    let diff_days = Math.floor(diff/(24*60*60*1000));
    console.log(diff_days);
    let diff_hours = Math.floor((diff%(24*60*60*1000)/(60*60*1000)));
    console.log((diff_hours));
    let  diff_mins = Math.floor(((diff%(60*60*1000))/(60*1000)));
    console.log((diff_mins));
    let diff_sec = Math.floor((diff%(60*1000))/1000);
    console.log(diff_sec);

    if(diff > 0){
        days.textContent = check_diff(diff_days);
    hours.textContent = check_diff(diff_hours);
    min.textContent = check_diff(diff_mins);
    sec.textContent = check_diff(diff_sec);
    }else{
        mainEL.textContent = "Happy New Year";
    }
}

function check_diff(value){
    if(value < 10){
        return `0${value}`
    }else{
        return `${value}`
    }
}
