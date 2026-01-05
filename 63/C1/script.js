const watch = document.getElementById('watch')
const start = document.getElementById('start')
const stopbtn = document.getElementById('stop')
const reset = document.getElementById('reset')

let time = 0
let prevtime = 0
let intervaiID
let isStarted = false

start.addEventListener('click',()=>{
    if(isStarted)return
    prevtime = Date.now()
    isStarted = true
    intervaiID = setInterval(() => {
        time += Date.now() - prevtime
        temp = time
        let minute = String(Math.floor(temp / (60*1000))).padStart(2,"0")
        temp -= minute * (60*1000)
        let second = String(Math.floor(temp / 1000)).padStart(2,"0")
        temp -= second * 1000
        let msecond = String(Math.floor(temp / 10)).padStart(2,"0")
        watch.textContent = `${minute}:${second}:${msecond}`
        prevtime = Date.now();
    },10)
})

stopbtn.addEventListener('click',()=>{
    clearInterval(intervaiID)
    isStarted = false
})

reset.addEventListener('click',()=>{
    clearInterval(intervaiID)
    isStarted = false
    time = 0
    watch.textContent = `00:00:00`
})