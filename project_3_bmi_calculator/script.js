const inputValue = document.querySelectorAll("input")
const button  = document.querySelectorAll("button")

button[0].addEventListener("click",()=>{
    if(!inputValue[0].value && !inputValue[1].value){
        document.querySelector("span").innerText="please enter the weight and height "
        const id = setTimeout(()=>{document.querySelector("span").innerText=""},2500)
        return
    }
    getBMI(inputValue[0].value,inputValue[1].value)
})

function getBMI(weight,height){
    let bmi = (Number(weight)/(height*height)).toFixed(1)
    document.querySelector("p").innerText=`${bmi}BMI`
    const utternce = new SpeechSynthesisUtterance(`${bmi} Body Mass Index`)
    speechSynthesis.speak(utternce)
}

button[1].addEventListener("click",()=>{
 inputValue.forEach((input)=>{
    input.value=""
 })
 document.querySelector("p").innerText=""
})