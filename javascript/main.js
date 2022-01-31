window.addEventListener('scroll', function() {
    let animado = document.getElementById('animado');
    let posicion = animado.offsetTop;
    console.log(posicion);
    let pantalla = window.scrollY;

    if(posicion - 200 < pantalla) {
        animado.classList.add('appear')
    }
})
window.addEventListener('scroll', function() {
    let animar = document.getElementById('animar');
    let posicion = animar.offsetTop;
    console.log(posicion);
    let pantalla = window.scrollY;

    if(posicion - 200 < pantalla) {
        animar.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let mover = document.getElementById('mover');
    let posicion = mover.offsetTop;
    console.log(posicion);
    let pantalla = window.scrollY;

    if(posicion - 200 < pantalla) {
        mover.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let subir = document.getElementById('subir');
    let posicion = subir.offsetTop;
    console.log(posicion);
    let pantalla = window.scrollY;

    if(posicion - 200 < pantalla) {
        subir.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let move = document.getElementById('move');
    let posicion = move.offsetTop;
    console.log(posicion);
    let pantalla = window.scrollY;

    if(posicion - 200 < pantalla) {
        move.classList.add('appear') 
    }
})