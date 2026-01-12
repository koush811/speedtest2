const text = document.getElementById('text')
const input = document.getElementById('input')

function Color(){
    return `rgb(
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)},
        ${Math.floor(Math.random() * 256)}
    )`
}

document.querySelector('button').addEventListener('click',()=>{
    const key = input.value
    if(key == "")return

    let hilighttext = text.textContent

    const regex = new RegExp(key,'g');

    hilighttext = hilighttext.replace(regex,(match)=>{
        const color = Color()
        return `<span style="background-color:${color};">${match}</span>`
    })
    text.innerHTML = hilighttext
})