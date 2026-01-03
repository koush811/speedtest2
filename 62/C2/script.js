const steps = document.querySelectorAll('.step')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const finish = document.getElementById('finish')
const complete = document.getElementById('complete')
const buttons = document.getElementById('buttons')

let temp = 0

function step(){
    steps.forEach((step, index) => {
        step.classList.toggle('active', index === temp)
    })
    if(temp === 2){
        finish.style.display = "block"
    }else{
        finish.style.display = "none"
    }
}

prev.addEventListener('click',()=>{
    if(temp > 0){
        temp--
        step()
    }
})

next.addEventListener('click',()=>{
    if(temp < steps.length-1){
        temp++
        step()
    }
})

finish.addEventListener('click',()=>{
    steps.forEach(step => step.style.display = 'none')
    complete.style.display = 'block'
    buttons.style.display = 'none'
})



step()