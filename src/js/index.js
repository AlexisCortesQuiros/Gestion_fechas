// Obtener el elemento body por su id
const mainDiv = document.getElementById("main");

// Crear el contenedor para la cuenta regresiva
const cuentaAtras = document.createElement("div");
cuentaAtras.id = "cuentaAtras";

// Crear elementos para la cuenta regresiva
const meses = document.createElement("div");
const dias = document.createElement("div");
const horas = document.createElement("div");
const minutos = document.createElement("div");
const segundos = document.createElement("div");

// Agregar los elementos de la cuenta regresiva al contenedor
cuentaAtras.appendChild(meses);
cuentaAtras.appendChild(dias);
cuentaAtras.appendChild(horas);
cuentaAtras.appendChild(minutos);
cuentaAtras.appendChild(segundos);

// Agregar cuenta atrás al main
mainDiv.appendChild(cuentaAtras);

// Crear un selector de fecha
const selectorFecha = document.createElement("input");
selectorFecha.type = "date";
selectorFecha.id = "selectorFecha";

const actualizarFechaBtn = document.createElement("button");
actualizarFechaBtn.id = "actualizarFecha";
actualizarFechaBtn.textContent = "Actualizar Fecha Objetivo";

// Agregar selector de fecha y botón al main
mainDiv.appendChild(selectorFecha);
mainDiv.appendChild(actualizarFechaBtn);

let fechaObjetivo = new Date("March 25, 2025 00:00:00").getTime();

function actualizarCuentaRegresiva() {
    const ahora = new Date().getTime();
    const tiempoRestante = fechaObjetivo - ahora;

    if (tiempoRestante <= 0) {
        meses.innerHTML = `Meses: 0`;
        dias.innerHTML = `Días: 0`;
        horas.innerHTML = `Horas: 0`;
        minutos.innerHTML = `Minutos: 0`;
        segundos.innerHTML = `Segundos: 0`;
        cuentaAtras.style.color = "red";
        clearInterval(intervalo);
        return;
    }

    const segundosTotales = Math.floor(tiempoRestante / 1000);
    const minutosTotales = Math.floor(segundosTotales / 60);
    const horasTotales = Math.floor(minutosTotales / 60);
    const diasTotales = Math.floor(horasTotales / 24);
    const mesesTotales = Math.floor(diasTotales / 30.44);

    const segundosRestantes = segundosTotales % 60;
    const minutosRestantes = minutosTotales % 60;
    const horasRestantes = horasTotales % 24;
    const diasRestantes = diasTotales % 30.44;

    meses.innerHTML = `Meses: ${mesesTotales}`;
    dias.innerHTML = `Días: ${Math.floor(diasRestantes)}`;
    horas.innerHTML = `Horas: ${horasRestantes}`;
    minutos.innerHTML = `Minutos: ${minutosRestantes}`;
    segundos.innerHTML = `Segundos: ${segundosRestantes}`;

    if (mesesTotales >= 1) {
        cuentaAtras.style.color = "green";
    } else if (diasTotales <= 14 && diasTotales >= 7) {
        cuentaAtras.style.color = "orange";
    } else if (diasTotales < 7) {
        cuentaAtras.style.color = "red";
    }
}

const intervalo = setInterval(actualizarCuentaRegresiva, 1000);

// Escuchar el botón para actualizar la fecha objetivo
actualizarFechaBtn.addEventListener("click", function() {
    const nuevaFecha = selectorFecha.value;
    if (nuevaFecha) {
        fechaObjetivo = new Date(nuevaFecha + " 00:00:00").getTime();
    }
});


