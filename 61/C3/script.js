const text = document.getElementById('text')
const back = document.getElementById('back')

document.querySelector('button'),addEventListener('click',()=>{
    if(text.textContent == "ライトモード"){
        text.textContent = "ナイトモード"
        text.style.color = "white"
        back.style.backgroundColor = "black"
    }else{
        text.textContent = "ライトモード"
        text.style.color = "black"
        back.style.backgroundColor = "white"
    }
    
})