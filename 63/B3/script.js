const btn = document.querySelector('button')
const text = document.getElementById('text')
length = 12
const keys = 
    'abcdefg'+'ABCDEFG'+"!#$%&{("

btn.addEventListener('click',()=>{
    let password = ""

    for(let i = 0; i<length;i++){
        const randam = Math.floor(Math.round() * keys.length)
        password += keys[randam]
    }
})