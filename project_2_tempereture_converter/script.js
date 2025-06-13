let input = document.querySelector("input")
const button = document.querySelectorAll("button")
const para = document.querySelector("p")

button[0].addEventListener("click",()=>{
    let farenhight = Math.floor(((Number(input.value)*(9/5))+32));
    para.innerText=`${farenhight}F`
    const utterance = new SpeechSynthesisUtterance(`${farenhight} Fahrenheit`);
    speechSynthesis.speak(utterance)
})

function clear(){
    input.value=""
    para.innerText=""
}

button[1].addEventListener("click",()=>{
    clear()
})