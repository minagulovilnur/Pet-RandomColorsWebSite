const cols = document.querySelectorAll('.col')

//RGB
//#FF0000   КРАСНЫЙ
//#00FF00   ЗЕЛЕНЫЙ 
//#0000FF   СИНИЙ

function generateRandomColor(){
    const hexCodes = '0123456789ABCDEF'
    let color = ''
    for (let i = 0; i<6; i++){
        color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
    }
    return '#'  + color
}

function setRandomColors() {
    cols.forEach((col) => {
        const text = col.querySelector ('h2')
        const color = generateRandomColor()

        text.textContent =color
        col.style.background = color
    } )
}

setRandomColors()