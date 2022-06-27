const button=document.querySelector("button")
let audio = new Audio("./muzikomg/rickrollsyou.mp3")
button.addEventListener('click', () =>{
    audio.play()
})