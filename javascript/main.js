window.addEventListener('scroll', function() {
    let animado = document.getElementById('animado');
    let height = window.innerHeight;
    let posicion = animado.offsetTop;
    let pantalla = window.scrollY;

    if(posicion - height - 100 < pantalla) {
        animado.classList.add('appear')
    }
})
window.addEventListener('scroll', function() {
    let animar = document.getElementById('animar');
    let height = window.innerHeight;
    let posicion = animar.offsetTop;
    let pantalla = window.scrollY;

    if(posicion - height - 100 < pantalla) {
        animar.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let mover = document.getElementById('mover');
    let height = window.innerHeight;
    let posicion = mover.offsetTop;
    let pantalla = window.scrollY;

    if(posicion - height + 40 < pantalla) {
        mover.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let subir = document.getElementById('subir');
    let height = window.innerHeight;
    let posicion = subir.offsetTop;
    let pantalla = window.scrollY;

    if(posicion - height + 40 < pantalla) {
        subir.classList.add('appear') 
    }
})

window.addEventListener('scroll', function() {
    let move = document.getElementById('move');
    let height = window.innerHeight;
    let posicion = move.offsetTop;
    let pantalla = window.scrollY;

    if(posicion - height + 40 < pantalla) {
        move.classList.add('appear') 
    }
})