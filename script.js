let boxes = document.querySelectorAll(".box");
let resetbutton = document.querySelector("#reset-btn")
let newbutton = document.querySelector(".new-btn");
let msgcontainer = document.querySelector("#msg-container")
let msg = document.querySelector(".msg");

let turno = true;

const winpatterns = [
  [0,1,2],
  [0,3,6],
  [0,4,8],
  [1,4,7],
  [2,5,8],
  [2,4,6],
  [3,4,5],
  [6,7,8]
]

const resetGame = () =>
{
turno =  true;
enableBoxes();
msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box Was Clicked");
        if(turno)
        {
            box.innerText = "o";
            turno = false;
        }
        else
        {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true;
        checkwinner ();
    });
});

const disableBoxes = () =>
{
for(let box of boxes)
{
    box.disabled = true;
    box.innerText = "";
}
}

const enableBoxes = () =>
{
for(let box of boxes)
{
    box.disabled = false;
}
}

const showWinner = (winner) =>
{
  msg.innerText = `Congratulations, winner Is ${winner}`;
  msgcontainer.classList.remove("hide");
  disableBoxes();
//   enableBoxes();
};

const checkwinner = () =>
{
    for (let pattern of winpatterns)
    {  
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        
        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("Winner",pos1);
                showWinner(pos1);
            }
        }
    }
}

newbutton.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);