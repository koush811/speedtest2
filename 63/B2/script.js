const text = document.getElementById('text')
const hero = document.querySelector('.hero')
const max = 30


hero.addEventListener('mousemove',(e)=>{
    const rect = hero.getBoundingClientRect()
    let x = e.clientX - rect.left
    let y = e.clientY - rect.top

    const width = hero.offsetWidth
    const height = hero.offsetHeight

    console.log(x,y)

    const walkX = Math.round((x/width * max) - (max / 2)) 
    const walkY = Math.round((y/height * max) - (max / 2)) 

    text.style.textShadow = 
    `
    ${walkX}px ${walkY}px 0px rgba(0,0,0,0.5),
    ${-walkX}px ${-walkY}px 0px rgba(188, 8, 8, 0.5),
    ${-walkX}px ${walkY}px 0px rgba(255, 247, 0, 0.85)
    `
});


