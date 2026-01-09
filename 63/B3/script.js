const btn = document.querySelector('button')
const text = document.getElementById('text')
length = 12
const keys = 
    'abcdefg'+'ABCDEFG'+"!#$%&{("


btn.addEventListener('click',()=>{
    let password = ""

    for(let i= 0;i<length;i++){
        const random = Math.floor(Math.random() * keys.length)
        password += keys[random]
    }

    text.textContent = password
})