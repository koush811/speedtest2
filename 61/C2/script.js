const inputr = document.getElementById('r')
const inputg = document.getElementById('g')
const inputb = document.getElementById('b')
const inputhex = document.getElementById('hex')
const display = document.getElementById('color')

document.getElementById('changehex').addEventListener('click',()=>{
        display.style.backgroundColor = `rgb(${inputr.value},${inputg.value},${inputb.value})`
        const tohex = rgbToHex(Number(inputr.value) , Number(inputg.value), Number(inputb.value))
        document.getElementById('change').textContent = tohex
})

document.getElementById('changergb').addEventListener('click',()=>{
        display.style.backgroundColor = `${hex.value}`
        const {r,g,b} = hexToRgb(inputhex.value)
        document.getElementById('change').textContent = `rgb(${r},${g},${b})`
})

function rgbToHex(r,g,b){
    return "#" + [r,g,b].map(v => v.toString(16).padStart(2,"0")).join("")
}

function hexToRgb(hex){
    hex = hex.replace("#","")
    
    const r = parseInt(hex.slice(0,2),16)
    const g = parseInt(hex.slice(2,4),16)
    const b = parseInt(hex.slice(4,6),16)

    return {r,g,b}
}