// CONNECTED WITH Tic-Tac-Toe.html
let boxes = document.querySelectorAll(".box");
let win = document.querySelector(".winner-msg");
let turn = true;
let moveCount = 0;

const winPatterns = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    console.log("button was clicked");
    moveCount++;
    if(turn){
      box.innerText = "X";
      turn = false;
      box.style.color = "black";
    }else{
      box.innerText = "O";
      turn = true;
      box.style.color = "black";
    }
    box.disabled = true;
    
    checkWinner();
  });
});

const disabledbox = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};


const checkWinner = () => {
  let winnerFound = false;
  for(pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
      if(pos1val === pos2val && pos2val === pos3val){
        console.log("Winner.", pos1val);
        win.innerText = "Congratulations Winner is " + pos1val;
        disabledbox();
        winnerFound = true;
        return;
        
      }
    }
  }
  // DRAW CONDITION 
 if(!winnerFound && moveCount === 9){
  win.innerText = "It's a Draw";
 }
};


// RESET BUTTON
let resetBtn = document.querySelector("#reset-Btn");

resetBtn.addEventListener("click", () => {
  boxes.forEach((box) => {
    box.innerText = "";
    win.innerText = ""
    box.disabled = false;
    moveCount = 0;
  });
  turn = true;
});


 




// OR BELOW FUNCTION CAN ALSO BE USED IN CHECK WINNER FUNCTION::
// function checkWinner(){
//   for(pattern of winPatterns){
//     let pos1val = boxes[pattern[0]].innerText;
//     let pos2val = boxes[pattern[1]].innerText;
//     let pos3val = boxes[pattern[2]].innerText;
    
//     if(pos1val != "" && pos2val != "" && pos3val != ""){
//       if(pos1val === pos2val && pos2val === pos3val){
//         console.log("Winner.")
//       }
//     }
//   }
// }