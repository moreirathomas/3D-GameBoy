// Les interections sont peu nombreuses, encore une fois un manque de temps
// De l'interaction sur les autres botons, de l'audio et même un changement de couleur de la gameboy auraient pu être envisagés
const btnOn = document.querySelector('.on')
const btnOff = document.querySelector('.off')
const screen = document.querySelector('.screen')
const gameboy = document.querySelector('.gameboy')
// const gameboy = document.querySelectorAll('.face')

btnOn.addEventListener('click', function(){
    screen.style = 'background-image: url(images/titlescreen.png); background-position: center ; background-size: contain; background-repeat: no-repeat'
})
btnOff.addEventListener('click', function(){
    screen.style.background = '#3B4206'
})

gameboy.addEventListener('mouseenter', function(){
    gameboy.style.animationPlayState = 'paused'
})
gameboy.addEventListener('mouseleave', function(){
    gameboy.style.animationPlayState = 'running'
})
// gameboy.forEach(face => {
//     face.addEventListener('mouseenter', function(){
//         gameboy.style.animationPlayState = 'paused'
//     })
//     face.addEventListener('mouseleave', function(){
//         gameboy.style.animationPlayState = 'running'
//     })
// });
