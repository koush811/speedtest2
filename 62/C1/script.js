const input = document.getElementById('text')
const count = document.getElementById('count')

input.addEventListener('input',()=>{
    count.textContent = input.value.length
})