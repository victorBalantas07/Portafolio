let menuVisibility=false;

/*Ocultar o Mostrar*/
function mostrarOcultarMenu(){
    if(menuVisibility){
        document.getElementById("nav").classList="";
        menuVisibility=false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisibility=true;

    }
    
}
function seleccionar(){
    document.getElementById("nav").classList="";
    menuVisibility=false;
}
function efectoHabilidad(){
    var habilidades=document.getElementById("habilidades");
    var distancia_habilidades=window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_habilidades >=300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("githud");
        habilidades[4].classList.add("ilustrator");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("equipo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyecto");
    }
}

window.onscroll =function(){
    efectoHabilidad();
}