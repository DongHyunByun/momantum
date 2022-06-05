// documnet라는 객체를 통해서 html에 직접 접근할 수 있다
document.title = "Hello from js"

// -------------------------------[불러오기]-------------------------------
// 1. id로 불러오기
const callById = document.getElementById("line1"); 
console.log(callById);
console.log("className : ",callById.className);
console.log("innerText : ",callById.innerText);
console.dir(callById);

callById.innerText="(updated)this is h1 1"; //line1의 글자를 grab me-> got you로 바꿈

// 2. 클래스이름으로 불러오기
const calByClass = document.getElementsByClassName("divClass");
console.log(calByClass); 

// 3. tag로 불러오기
const callByTag = document.getElementsByTagName("h2")
console.log(callByTag)
 
// 4. 쿼리사용, 추천하는 방법
const callByQuery = document.querySelector("h1.h1Class");
console.log(callByQuery)

// -------------------------------[이벤트동작]-------------------------------

// 1. 클릭으로 색깔 바꾸기
function handleTitleClickColor() {
    // element가 블루면 토마토, 토마토면 블루로
    const nowColor = changeColorElement.style.color;
    let newColor;

    if (nowColor==="blue") {
        newColor = "tomato";
    }
    else { 
        newColor = "blue";
    }
    changeColorElement.style.color = newColor  
}
const changeColorElement = document.getElementById("clickChangeColor"); 
changeColorElement.addEventListener("click",handleTitleClickColor);

// 2. 클릭으로 클래스 추가, 제거하기
function handleTitleClickAdd() {
    //clicked가 없을때 추가 있으면 제거
    const clickedClass = "clicked";
    if (changeColorElement.classList.contains(clickedClass)) {
        changeColorElement.classList.remove(clickedClass)
    } else {
        changeColorElement.classList.add(clickedClass)
    }   
}

function handleTitleClickToggle() {
    //clicked가 없을때 추가 있으면 제거
    changeColorElement.classList.toggle("clicked")
}

const changeClassElement = document.getElementById("clickChangeClass"); 
changeClassElement.addEventListener("click",handleTitleClickAdd);
// changeClassElement.addEventListener("click",handleTitleClickToggle);


// 3. 마우스오버로 글자 바꾸기
function handleMouseEnter() {
    mouseOverElement.innerText = "mouse is here!"
}

function handleMouseLeave() {
    mouseOverElement.innerText = "mouse is out!"
}

const mouseOverElement = document.getElementById("mouseOver"); 
mouseOverElement.addEventListener("mouseenter",handleMouseEnter);
mouseOverElement.addEventListener("mouseleave",handleMouseLeave);

// 4. 윈도우 크기를 변화시키면 배경색이 바뀜
function changeBackColor() {
    // 배경색깔을 바꿈
    document.body.style.backgroundColor = "tomato";
}
window.addEventListener("resize",changeBackColor); // 윈도우 크기를 변화시키면

// 5. 복사를 하면 알람이 옴
function makeAlert() {
    alert("copier!")
}
window.addEventListener("copy",makeAlert); // 복사를 하면 알람 

// 6. 와이파이 끊기거나 연결되면 알람이 옴
function allertNoWifi() {
    alert("no wifi!")
}

function allertYesWifi() {
    alert("yes wifi!")
}
window.addEventListener("offline",allertNoWifi); //와이파이가 끊기면 알람
window.addEventListener("online",allertYesWifi); //와이파이가 연결되면 알람