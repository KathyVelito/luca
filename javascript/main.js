window.addEventListener('scroll', function() {
    let animado = document.getElementById('animado');
    let posicion = animado.getBoundingClientRect().top;
    console.log(posicion);
    let pantalla = window.innerHeight/1;

    if(posicion < pantalla) {
        animado.style.animation = 'mover 2s ease-out'
    }
})
window.addEventListener('scroll', function() {
    let animar = document.getElementById('animar');
    let posicion = animar.getBoundingClientRect().top;
    console.log(posicion);
    let pantalla = window.innerHeight/1;

    if(posicion < pantalla) {
        animar.style.animation = 'mover 3s ease-out forwards' 
    }
})

window.addEventListener('scroll', function() {
    let mover = document.getElementById('mover');
    let posicion = mover.getBoundingClientRect().top;
    console.log(posicion);
    let pantalla = window.innerHeight/1;

    if(posicion < pantalla) {
        mover.style.animation = 'mover 3s ease-out forwards' 
    }
})

window.addEventListener('scroll', function() {
    let subir = document.getElementById('subir');
    let posicion = subir.getBoundingClientRect().top;
    console.log(posicion);
    let pantalla = window.innerHeight/1;

    if(posicion < pantalla) {
        subir.style.animation = 'mover 3s ease-out forwards' 
    }
})

window.addEventListener('scroll', function() {
    let move = document.getElementById('move');
    let posicion = move.getBoundingClientRect().top;
    console.log(posicion);
    let pantalla = window.innerHeight/1;

    if(posicion < pantalla) {
        move.style.animation = 'mover 3s ease-out forwards' 
    }
})