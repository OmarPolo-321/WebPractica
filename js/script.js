let navbar=document.querySelector('.header .navbar');

document.querySelector('#main-btn').onclick=()=>{
    navbar.classList.toggle('active');
}

document.querySelectorAll('.about .img-container .controls .control-btn').forEach(btn=>{ //recorrec cada btn y le asigna un evento onClick
    btn.onclick=()=>{

        //Toma el valor del atributo data-src del botón. Ese valor de la imagen o video.
        let src=btn.getAttribute('data-src');

        //Cambia la imagen principal dentro de .about .img-container para que tenga el src del botón.
        document.querySelector('.about .img-container img').src=src;

        //Agrega la clase active al botón que se ha hecho clic y elimina la clase active de los demás botones.
        document.querySelectorAll('.about .img-container .controls .control-btn').forEach(btn=>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');
    }
})