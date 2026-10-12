// // // // // const.arr=[1,2,3,4, "sid"];
// // // // // console.log(arr);
// // // // // console.log(arr[4]);
// // // // // arr.push("aa");
// // // // // console.log(arr);
// // // // // arr.push(7);
// // // // // console.log(arr);
// // // // // arr.pop();
// // // // // console.log(arr);
// // // // // arr.pop();
// // // // // console.log(arr);
// // // // // arr.pop();
// // // // // console.log(arr);
// // // // // arr.unshift(2);
// // // // // console.log(arr);
// // // // // arr.unshift("Hello");
// // // // //  console.log(arr); 
// // // // // arr.shift();
// // // // // console.log(arr);c
// // // // // arr.shift();
// // // // // console.log(arr);
// // // // // console.log(arr.length);

// // // // // const obj= {
// // // // //     name: "sid";
// // // // //     email: sid@gmail.com;
// // // // //     contact: 989898;
// // // // //     info :{
// // // // //         address: "jdjnfvklmsm";
// // // // //         sports: ["cricket" , "swimming"];

// // // // //     },
    

// // // // // };

// // // // // console.log(obj);
// // // // // console.log(obj.contact);
// // // // // console.log(obj.info.sports);
// // // // // console.log(obj.info.sports[0]);



// // // // //const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// // // // // variable with a value ; conditions ; Inc / dec the variable
// // // // for(let i = 0 ; i< arr.length; i++){
// // // //     console.log("On index " , i, "Value is ", arr[1]);
// // // // }
// // // // for(let i = 0 ; i<=10 ; i++){
// // // //     console.log("2*" ,i, "=", (2*i))
// // // // }

// // // // const arr = [1, 2, 3, 4, 5, 6, 7, 8,];
// // // // //
// // // // for(let i =0 ; i < arr.length; i++){
// // // //     console.log("On index " , i, "Value is ", arr[i]);
// // // // }
// // // //     console.log(arr);

// // // //     const newArr = arr.map((currentValue, index) => {
// // // //          console.log("On index " , i, "Value is ", currentvalue);
// // // //          return currentValue*index;
// // // //     });

    
// // // //     console.log(newArr);

// // // //     const evenNo = arr.filter((currentValue, index) => {
// // // //     // 
// // // //     return currentValue % 2== 0;
// // // // });
// // // // console.log(evenNo);

// // // // const sumOfAll = arr.reduce((accumulator, currentvalue, index) => {
// // // // return accumulator + currentvalue;

// // // // }, 0);

// // // // console.log(sumOfAll);

// // // // 1 tag selector 
// // // // return an array
// // // // HTML collection type of array

// // // let h1 = document.getElementsByTagName("h1");
// // // console.log(h1[1]);

// // // // 2. class selector
// // // // return an array
// // // // HTML collection type of array


// // // let a = document.getElementsByClassName("a");
// // // console.log(a[1]);

// // // // 3 . id selector 
// // // // return only  a single and first value

// // // let idSelector = document.getElementById("b");
// // // console.log(idSelector);

// // // //4. query selector
// // // // return only a single and first value

// // // let data = document.querySelector("#b");
// // // console.log(data);

// // // // 5. QuerySelector ALL
// // // // return an array of type NodeList

// // // let MyData = document.querySelectorAll("h1");
// // // console.log(MyData[0]);

// // // // Read and write operations 

// // // console.log(MyData[0].textContent);
// // // MyData[0].textContent = "Written By DOm";

// // // // styling 

// // // MyData[0].style.colour = "red";
// // // MyData[0].style.backgroundColor = "Yellow";


// // // add/remove/toggle
// // let heading = document.querySelectorAll("h1");

// // heading[1].classList.add("c");
// // heading[1].classList.remove("b");
// // heading[1].classList.remove("c");

// // let btn = document.querySelector("button");

// // btn.addEventListener("click", () => {
// //     console.log("btn clicked");
// //     heading[1].classList.toggle("c");
// //     document.body.classList.toggle("e");
// // });

// let input = document.querySelector("input");
// let btn =  document.querySelector(".g");
//  let ol =  document.querySelector("ol");

//  btn.addEventListener("click" , () => {
//   if(input.value != "") {
//     let li = document.createElement("li");
//     li.textContent = input.value;
//     ol.appendChild(li);
//     input.value = "";
//   }
//  });

 
// 1. Instances of all notes

let player1 = document.querySelector(".player--0");
let player2 = document.querySelector(".player--1");

let score1 = document.querySelector("#score--0");
let score2 = document.querySelector("#score--1");

let current1 = document.querySelector("#current--0");
let current2 = document.querySelector("#current--1");

let diceE1 = document.querySelector(".dice");
let btnNew = document.querySelector(".btn--New ");
let btnHold = document.querySelector(".btn--Hold");
let btnRoll = document.querySelector(".btn--Roll");

// declare few variables for internet working 

let mainScore1, mainScore2, currentScore, activePlayer, playing;

//3. new game button functionally
let init =  () => {
  //3.1 set all score to 0
  current1.textContent = 0;
  current2.textContent = 0;
  currentScore = 0;
  mainScore1 = 0;
  score1.textContent = 0;
  score2.textContent =0;
  activePlayer = 0;
  playing = true;
  // 3.2 set player 1 as active player
  player1.classList.add("player---active");
  player1.classList.remove("player---active");
  player1.classList.remove("player---active");
  player1.classList.remove("player---active");

  //3.3 remove dice image

  diceE1.classList.add("hidden");
};

init();
let changePlayer = () => {
  document.querySelector('#current--${activePlayer}').textContent = 0;
  currentScore = 0;
  player1.classList.toggle("player--active");
  player1.classList.toggle("player--active");
  
};

//4. Roll Dice button Functionally
let rollDice = () =>{
  //4.1 currently we are playing or not
  if(playing == true){
    //4.1.1 generate a random number
     let randomNumber = Math.trunc(Math.random() = 6) + 1;
        console.log(randomNumber);

        //4.1.2 show the random no dice image 
        diceE1.src = 'dice${randomNumber}.png';
        diceE1.classList.remove("hidden");
        // 4.1.3.1 add random no to current no 

        currentScore = cureentScore + randomNumber;
        // 4.1.3.1.1 update the current score and show on ui
        document.querySelector('#current--${activePlayer}').textContent = currentScore
    }
    else {
        // 4.1.4 change player
        changePlayer();
        //4.1.4.4 current score should be 0
        changePlayer();
        //4.1.4.4 current score should be 0
    }
};
//5. Hold button functionally
let hoDice =() => {
  // 5.1 currently we are playing or not
  if (playing == true) {
    // 5.1.1 add current score to total score of active player
    if (activePlayer == 0) {
      mainScore1 = mainScore1 + currentScore;
      score1.textContent = mainScore1;

      if (mainScore1 >= 20) {
        playing = false;
        diceE1.classList.add("hidden");
        player1.classList.add("player--winner");
      } else {
        changePlayer();
      }
    } else {
      mainScore2 = mainScore2 + currentScore;
      score2.textContent = mainScore2;

      if (mainScore2 >= 20) {
        playing = false;
        diceE1.classList.add("hidden");
        player2.classList.add("player--winner");
      } else {
        changePlayer();
      }
    }
  }
};

// Events 

btnNew.addEventListener("click",init);
btnRoll.addEventListener("click",rollDice);
btnHold.addEventEventListner("click",holDice);





