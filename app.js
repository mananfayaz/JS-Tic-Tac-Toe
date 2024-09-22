let boxes=document.querySelectorAll(".box");   // all boxes in a array
let resetBtn=document.querySelector("#rst");
let newGameBtn=document.querySelector("#newBtn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
msgContainer.classList.add("hide");

let turn0=true;

const winPatterns= [
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]
];

newGameBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        turn0=true;
        enableBoxes();
    })
})


boxes.forEach((box)=>{
    box.addEventListener("click",()=> {
        console.log("THE BOX WAS CLICKD");
        if(turn0===true)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
     box.disabled=true;
     checkWinner();
    }
)
}
)

resetBtn.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        turn0=true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }
)   
})

const disableBoxes= ()=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const checkWinner=()=>{
    for(pattern of winPatterns)
    {
    let pos1Val=boxes[pattern[0]].innerText;
    let pos2Val=boxes[pattern[1]].innerText;
    let pos3Val=boxes[pattern[2]].innerText;

    if(pos1Val != "" &&  pos2Val != "" && pos3Val != "")
    {
        if(pos1Val===pos2Val && pos2Val===pos3Val)
        {
            console.log("winner");
            console.log(pos1Val);
            showWinner(pos1Val);
        }
    }

}  
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
}
const showWinner=(winner)=>
{
   disableBoxes();
   msg.innerText=`Congratulations,Winner is ${winner}`;
   msgContainer.classList.remove("hide");

};




