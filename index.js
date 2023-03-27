/*---------------------------------------------------------------------- 
Eventos de Javascript
Autor: Abaca 
Fecha: 24/02/23
----------------------------------------------------------------------*/


document.getElementById("modo").addEventListener("click",function() {
    
    if (document.body.style.backgroundColor=="black"){
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
        document.getElementById("borde").style.border= "2px solid black";
        document.getElementById("perfil").style.border= "2px solid black";
        
                                                     } 
    else{
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
        document.getElementById("borde").style.border= "2px solid white";
        document.getElementById("perfil").style.border= "2px solid white";
        }
});

//document.getElementById('borde').style.color = 'red'; //Hace algo 

//document.getElementById("borde").style.borderBlockStyle = "green"; //NO



