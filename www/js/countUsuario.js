const getRemainTime = deadline =>{
    let now = new Date(),
        remainTime = (new Date(deadline) - now + 1000) /1000,
        remainSeconds = ('0' + Math.floor(remainTime % 60)).slice(-2),
        remainMinutes = ('0' + Math.floor(remainTime / 60 % 60)).slice(-2),
        remainHours = ('0' + Math.floor(remainTime / 3600 % 24)).slice(-2),
        remainDays = Math.floor(remainTime / (3600 * 24));

    return {
        remainTime,
        remainSeconds,
        remainMinutes,
        remainHours,
        remainDays
    }
};

const countdown = (deadline, elem, finalMessage) =>{
    const el = document.getElementById(elem);

    const timerUpdate = setInterval(() => {
        let t = getRemainTime(deadline);
        el.innerHTML = `00:${t.remainMinutes}:${t.remainSeconds}`;

        if(t.remainTime <= 1){
            clearInterval(timerUpdate);
            el.innerHTML = finalMessage;
        }

    }, 1000);
}

countdown ('May 13 2019 13:56:40 GMT-0300', 'clock', 'Puedes usar Premium');


// (function(){
//     var fecha = new Date(),
//         dia = fecha.getDate(),
//         mes = fecha.getMonth() + 1,
//         anio = fecha.getFullYear(),
//         tiempo = prompt("Ingrese la cantidad de días a añadir"),
//         addTime = tiempo * 86400; //Tiempo en segundos
 
//     fecha.setSeconds(addTime); //Añado el tiempo
 
//     document.body.innerHTML = "Fecha actual: " + dia + "/" + mes + "/" + anio + "<br />";
//     document.body.innerHTML += "Tiempo añadido: " + tiempo + " días<br />";
//     document.body.innerHTML += "Fecha final: " + fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
// })();
