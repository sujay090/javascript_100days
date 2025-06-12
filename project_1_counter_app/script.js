const button = document.querySelectorAll("button")
console.log(button)
let value  = Number(document.querySelector("div").innerText)
console.log(value)


button[0].addEventListener("click",()=>{
    if(value <= 0)return;
    genarateRandomColor(button[0])
    value--;
    document.querySelector("div").innerText=value;
})


button[1].addEventListener("click",()=>{
    if(value >= 10)return;
    genarateRandomColor(button[1])
    value++;
    document.querySelector("div").innerText=value;
})

function genarateRandomColor(button){
    button.style.backgroundColor = randomColor()
    button.classList.add('shake')
    removeClass(button)
}
removeClass(button)
function randomColor(){
    const hue = Math.floor(Math.random()*360);
    return `hsl(${hue},100%,85%)`;
}

function removeClass(button){
    setTimeout(()=>button.classList.remove("shake"),500)
}