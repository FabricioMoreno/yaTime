function myTime(){
    //Obteniendo datos del tiempo
    var laHora = new Date();
    var horario = laHora.getHours();
    var minutero = laHora.getMinutes();
    var segundero = laHora.getSeconds();
    var  mes = laHora.getMonth();
    var dia = laHora.getDay();
    var num = laHora.getDate();
    var year = laHora.getFullYear();
    const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    const dias = ["Domingo","Lunes","Martes","Miercoles","Juves","Viernes","Sabado"];
    var parte ;
    
    if(minutero<10){
        minutero = "0" + minutero;
    }
    if(segundero<10){
        segundero = "0" + segundero;
    }
    if(horario<12 || horario == 0){
        parte = "AM"
    }
    else{
        parte = "PM"
    }

    //escribiendo sobre el campo de texto la hora actual 
    document.getElementById('hora').innerHTML = horario+":"+minutero+":"+segundero+" "+parte;
    document.getElementById('fecha').innerHTML = `${dias[dia]}, ${num} ${meses[mes]} de ${year}`;
    //Desactivando el boton 'Activar Reloj'
     
    //Actualizando la hora cada 1 segundo
    ahoraSonLas = setTimeout(myTime,1000); 
} 


window.addEventListener('load',myTime);