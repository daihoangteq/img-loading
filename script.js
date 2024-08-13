
let itemImg = document.querySelectorAll(".imgItem").length
const boxNoti = document.querySelector(".noti");

let flag = 0;
function rendered() {
    //Render complete
    flag+=1
    if(flag > 0) {
        boxNoti.textContent = "Loading"
    }
    if(flag === itemImg) {
        boxNoti.textContent = "Done"
    }
}

function startRender() {
    //Rendering start
    requestAnimationFrame(rendered);
}

function loaded()  {
    requestAnimationFrame(startRender);
}