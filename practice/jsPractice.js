 //화면에 뜨는 경고창
//  alert("allert")
 
 // const와 let, 항상 기본은 const, 변화가 필요하면 그떄 let으로 바꿀것
 const a=5 // const는 상수
 let b=2 // let은 변수
 const myName = "dond";

 // Array
 const myArray=["hi","bye","hello",true,false,1,2];
 myArray.push(4);
 console.log(myArray)
 
 // 콘솔에 특정값 남기기
 console.log(a+b) //콘솔에 특정값 남기기
 console.log(a/b)
 console.log("hello "+myName)
 
// function
 function sayHello(nameOfPerson){
     console.log(nameOfPerson);
 };

sayHello("nico")
sayHello("dal") 

 // object만들기 
 const player={
     // 변수
     name:"nico",
     point:10,
     fat:true,

     // 함수
     printLog : function(a,b){
         console.log(a,b)
     }
 };
 console.log(player)
 console.log(player.name)
 console.log(player["fat"])
 player.printLog("func","log")

 player.lastName = "potato" //추가
 console.log(player)

 // 콘솔에 특정값 남기기
 const name = prompt("your name?")
 if (name.includes("dodo")){
     alert("you are dodo")
 }
 else {
     alert("who are you!")
 }

 // if , else if, else 문
 const age = ParseInt(prompt("How old are you"));
 if (isNaN(age)) {
     console.log("Pleae write a number");
 } else if (age<18) {
     console.log("you are too young.");
 } else {
     console.log("you can drink")
 }