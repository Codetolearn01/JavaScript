const btn = document.getElementById("btn");
const cont = document.getElementById("container");

btn.addEventListener("click",handleClick);

function handleClick(e){
    if(btn.innerText === "Updated"){
        btn.innerText = "Click Me";
        cont.innerText = "";
        return;
    }
    let txt = "Updated";
    btn.innerText = txt;

    handleContainer();
}
function handleContainer(){
    cont.innerText = "The button has been updated!";
}