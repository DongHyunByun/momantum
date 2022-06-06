const loginForm = document.querySelector("#login-form"); //querySelector에서 id는 #을 붙인다
const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"
const link = document.querySelector("a");

function onLoginSubmit(eventValue) {
    // eventValue에는 발생하는 이벤트(submit, click, mouseover)에 대한 클래스가 input으로 들어간다
    eventValue.preventDefault(); //submit의 default가 방지됨.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    localStorage.setItem(USERNAME_KEY,loginForm.value) //localstorage에 저장됨
    paintGreeting()
}
function hadleLinkClick(eventValue) {
    eventValue.preventDefault();
    console.dir(eventValue)
}
function paintGreeting() {
    const username = localStorage.getItem(USERNAME_KEY);
    greeting.innerText = `hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


loginForm.addEventListener("submit",onLoginSubmit);

const savedUserName = localStorage.getItem(USERNAME_KEY);
console.log(savedUserName);

if (savedUserName === null){
    // 로그인정보가 없을떄
    loginForm.classList.remove(HIDDEN_CLASSNAME); //로그인을 받아야하면 보이도록
    loginForm.addEventListener("submit", onLoginSubmit); //submit이벤트 발생시
}
else{
    // 로그인정보가 있을때
    paintGreeting()
}