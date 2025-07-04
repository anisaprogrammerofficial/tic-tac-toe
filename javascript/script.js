// selecting things we have to work on
let boxes= document.querySelectorAll(".box");
let resetbtn= document.querySelector(".reset");
let newbtn = document.querySelector(".newbtn");
let msgcontainer =document.querySelector(".msgcontainer");
let msg = document.querySelector(".msg");


// logic for 0 that if turno is true then 0 will be displayed in box
let turn0 =true;

// defining winning pattern 
const winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4 ,7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4 ,5],
    [6, 7, 8]
];
//  main logic
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn0 === true){
            box.innerText ="0";
            turn0 =false;
        }
        else{
            box.innerText = "X";
            turn0 =true;
        }
        box.disabled = true;
        checkwinner();
    })
})
//  logic to choose winner
checkwinner= ()=>{
    for (pattern of winpatterns){
        // console.log(pattern);
      let position1val =boxes[pattern[0]].innerText;
    //   console.log(position1val);
      let position2val = boxes[pattern[1]].innerText;
      let position3val = boxes[pattern[2]].innerText;
    if (position1val !="" && position2val != "" && position3val !=""){
        if(position1val=== position2val && position2val === position3val)
            // console.log("congratualtion you win!:",  position1val);
        showwinner(position1val);
    }
    }
}
// winner congrats message

const showwinner= (winner)=>{
    msg.innerText= `congratulations, winner is ${winner}`;
    console.log(msg.innerText);
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

// disable all the button after one of the player win

const disableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =true;
    }
}
// reset button logic
const resetgame =()=>{
    true0 = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

const enableBoxes = ()=>{
    for(let box of boxes){
        box.disabled =false;
    box.innerText =""
    }
}

//  new game btn logic

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);

