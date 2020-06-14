const form = document.querySelector(".js-form"), 
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");

const USER_LS = "currentUser",
 SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS,text);
}

function handleSubmit(event){
    event.preventDefault(); // 이벤트 전송을 막음 (form전송을 제한함)
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

 function askForName(){ // 사용자에게 이름을 물어봄
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit",handleSubmit)
 }

function paintGreeting(text){ // 폼을 없애고 사용자 이름을 h4태그에 담음
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}!`
}

function  loadName(){
    const currentUser = localStorage.getItem(USER_LS); 
    if(currentUser === null){
        // 유저가 없을경우
        askForName();
    } else{
        // 유저가 있을경우
        paintGreeting(currentUser); // 유저이름을 보여줌
    }
}

function init(){
    loadName();
}

init();