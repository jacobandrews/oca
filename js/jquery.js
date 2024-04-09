// Variables globales
let numJugadores = 2; // Número predeterminado de jugadores
let jugadores = []; // Array para almacenar la información de los jugadores
let turno = 0; // Indica el turno del jugador actual
let resultados = []; // Almacena los resultados finales de los jugadores

// Array que representa el tablero con las posiciones X e Y de cada casilla
const tablero = [
    { posicionX: 75, posicionY: 35 },      // Casilla 1
    { posicionX: 205, posicionY: 35 },     // Casilla 2
    { posicionX: 255, posicionY: 35 },     // Casilla 3
    { posicionX: 305, posicionY: 35 },     // Casilla 4
    { posicionX: 355, posicionY: 35 },     // Casilla 5
    { posicionX: 405, posicionY: 35 },     // Casilla 6
    { posicionX: 455, posicionY: 35 },     // Casilla 7
    { posicionX: 505, posicionY: 35 },     // Casilla 8
    { posicionX: 540, posicionY: 60 },    // Casilla 9  // Cambio de dirección hacia arriba aumenta 35 eje x, aumenta 25 eje y
    { posicionX: 540, posicionY: 115 },   // Casilla 10 // Solo aumenta eje Y
    { posicionX: 540, posicionY: 165 },   // Casilla 11
    { posicionX: 540, posicionY: 215 },   // Casilla 12
    { posicionX: 540, posicionY: 265 },   // Casilla 13
    { posicionX: 540, posicionY: 315 },   // Casilla 14
    { posicionX: 540, posicionY: 365 },   // Casilla 15
    { posicionX: 540, posicionY: 415 },   // Casilla 16
    { posicionX: 540, posicionY: 465 },   // Casilla 17
    { posicionX: 540, posicionY: 515 },   // Casilla 18
    { posicionX: 510, posicionY: 545 },   // Casilla 19  // Cambio de dirección hacia la izquierda disminuye 30 eje x, aumenta 30 eje y
    { posicionX: 460, posicionY: 545 },   // Casilla 20 // Solo disminuye eje X
    { posicionX: 410, posicionY: 545 },    // Casilla 21
    { posicionX: 360, posicionY: 545 },    // Casilla 22
    { posicionX: 310, posicionY: 545 },   // Casilla 23
    { posicionX: 260, posicionY: 545 },   // Casilla 24
    { posicionX: 210, posicionY: 545 },   // Casilla 25
    { posicionX: 160, posicionY: 545 },   // Casilla 26
    { posicionX: 110, posicionY: 545 },   // Casilla 27
    { posicionX: 60, posicionY: 545 },   // Casilla 28
    { posicionX: 30, posicionY: 500 },   // Casilla 29  // Cambio de dirección hacia abajo
    { posicionX: 30, posicionY: 450 },    // Casilla 30 // Solo disminuye eje Y
    { posicionX: 30, posicionY: 400 },    // Casilla 31
    { posicionX: 30, posicionY: 350 },    // Casilla 32
    { posicionX: 30, posicionY: 300 },    // Casilla 33
    { posicionX: 30, posicionY: 250 },    // Casilla 34
    { posicionX: 30, posicionY: 200 },   // Casilla 35
    { posicionX: 30, posicionY: 150 },   // Casilla 36
    { posicionX: 80, posicionY: 125 },   // Casilla 37  // Cambio de dirección hacia la derecha
    { posicionX: 120, posicionY: 125 },   // Casilla 38 // Solo aumenta eje X
    { posicionX: 170, posicionY: 125 },   // Casilla 39
    { posicionX: 220, posicionY: 125 },   // Casilla 40
    { posicionX: 270, posicionY: 125 },   // Casilla 41
    { posicionX: 320, posicionY: 125 },   // Casilla 42
    { posicionX: 370, posicionY: 125 },   // Casilla 43
    { posicionX: 420, posicionY: 125 },   // Casilla 44
    { posicionX: 460, posicionY: 150 },   // Casilla 45  // Cambio de dirección hacia arriba
    { posicionX: 460, posicionY: 210 },    // Casilla 46 // Solo aumenta eje Y
    { posicionX: 460, posicionY: 260 },    // Casilla 47
    { posicionX: 460, posicionY: 310 },    // Casilla 48
    { posicionX: 460, posicionY: 360 },    // Casilla 49
    { posicionX: 460, posicionY: 410 },    // Casilla 50
    { posicionX: 410, posicionY: 460 },    // Casilla 51  // Cambio de dirección hacia la izquierda
    { posicionX: 360, posicionY: 460 },    // Casilla 52 // Solo disminuye eje X
    { posicionX: 310, posicionY: 460 },    // Casilla 53
    { posicionX: 260, posicionY: 460 },    // Casilla 54
    { posicionX: 210, posicionY: 460 },   // Casilla 55
    { posicionX: 160, posicionY: 460 },   // Casilla 56
    { posicionX: 120, posicionY: 420 },    // Casilla 57  // Cambio de dirección hacia abajo
    { posicionX: 120, posicionY: 355 },    // Casilla 58 // Solo disminuye eje Y
    { posicionX: 120, posicionY: 305 },    // Casilla 59
    { posicionX: 120, posicionY: 250 },    // Casilla 60
    { posicionX: 160, posicionY: 205 },    // Casilla 61  // Cambio de dirección hacia la derecha
    { posicionX: 210, posicionY: 205 },    // Casilla 62 // Solo aumenta eje X
    { posicionX: 260, posicionY: 205 }     // Casilla 63
];




$(document).ready(function() {
    $('#configModal').modal('show'); // Mostrar modal de configuración al cargar la página
});



// Función para aplicar la configuración inicial
function aplicarConfiguracion() {
    numJugadores = $('#numJugadores').val();
    jugadores = []; // Reiniciar el array de jugadores
    resultados = []; // Reiniciar el array de resultados

    let configJugadores = '';
    let coloresDisponibles = [
        { nombre: 'Rojo', valor: 'red' },
        { nombre: 'Azul', valor: 'blue' },
        { nombre: 'Verde', valor: 'green' },
        { nombre: 'Amarillo', valor: 'yellow' }
    ];

    for (let i = 0; i < numJugadores; i++) {
        let nombre = $(`#nombreJugador${i + 1}`).val() || `Jugador ${i + 1}`;
        let color = $(`#colorJugador${i + 1}`).val();

        // Eliminar el color seleccionado de los colores disponibles
        coloresDisponibles = coloresDisponibles.filter(c => c.valor !== color);

        let jugador = {
            nombre: nombre,
            ficha: `ficha${i}`,
            posicion: 0,
            color: color,
            turno: (i === 0) ? true : false
        };

        jugadores.push(jugador);

        configJugadores += `
            <div class="row mb-3 align-items-center">
                <div class="col-md-4">
                    <label for="nombreJugador${i + 1}" class="mr-2 font-weight-bold">Nombre Jugador ${i + 1}:</label>
                    <input type="text" class="form-control mr-3" id="nombreJugador${i + 1}" placeholder="Jugador ${i + 1}" value="${nombre}">
                </div>
                <div class="col-md-4">
                    <label for="colorJugador${i + 1}" class="mr-2 font-weight-bold">Color:</label>
                    <div class="dropdown">
                        <button class="btn btn-secondary dropdown-toggle" type="button" id="colorJugador${i + 1}" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            ${color ? `<div class="ficha" style="background-color: ${color}; width: 20px; height: 20px; display: inline-block; vertical-align: middle;"></div>` : 'Color'}
                        </button>
                        <div class="dropdown-menu" aria-labelledby="colorJugador${i + 1}" style="width: auto; padding: 0;">
                            ${coloresDisponibles.map(c => `<a class="dropdown-item" href="#" onclick="seleccionarColor('${c.valor}', ${i + 1})" style="display: block; padding: 5px; line-height: 1;"><div class="ficha" style="background-color: ${c.valor}; width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-bottom: 5px;"></div></a>`).join('')}
                        </div>
                    </div>
                </div>
            </div>
        `;
    }

    $('#jugadoresConfig').html(configJugadores);
    $('#nombreModal').modal('show');
    $('#configModal').modal('hide');
}

// Función para seleccionar un color
function seleccionarColor(color, jugador) {
    $(`#colorJugador${jugador}`).html(`<div class="ficha" style="background-color: ${color}; width: 20px; height: 20px; display: inline-block; vertical-align: middle;"></div>`);
    $(`#colorJugador${jugador}`).val(color);
    $(`#colorJugador${jugador}`).removeClass('btn-secondary').addClass(`btn-${color}`);
    actualizarColoresDisponibles();
}

// Función para actualizar los colores disponibles en el menú desplegable
function actualizarColoresDisponibles() {
    let coloresDisponibles = [
        { nombre: 'Rojo', valor: 'red' },
        { nombre: 'Azul', valor: 'blue' },
        { nombre: 'Verde', valor: 'green' },
        { nombre: 'Amarillo', valor: 'yellow' }
    ];

    for (let i = 0; i < numJugadores; i++) {
        let colorSeleccionado = $(`#colorJugador${i + 1}`).val();
        coloresDisponibles = coloresDisponibles.filter(c => c.valor !== colorSeleccionado);

        let dropdownItems = coloresDisponibles.map(c => `<a class="dropdown-item" href="#" onclick="seleccionarColor('${c.valor}', ${i + 1})" style="display: block; padding: 5px; line-height: 1;"><div class="ficha" style="background-color: ${c.valor}; width: 20px; height: 20px; display: inline-block; vertical-align: middle; margin-bottom: 5px;"></div></a>`).join('');

        $(`#colorJugador${i + 1}`).next().html(dropdownItems);
    }
}




// Función para colocar los botones, los datos actuales del juego y las fichas en la casilla de salida
function iniciarJuego() {
    turno = 0;

    // Estructura inicial de los controles de los jugadores
    let controlesJugadores = `
        <div class="row justify-content-center mb-3 text-center">
            <div class="col-md-auto">
                <button id="reiniciarPartida" class="btn btn-success" onclick="reiniciarPartida()">Reiniciar Partida</button>
            </div>
            <div class="col-md-auto">
                <button id="reiniciarJuego" class="btn btn-danger" onclick="reiniciarJuego()">Reiniciar Juego</button>
            </div>
        </div>
        <div class="row justify-content-center mb-3 text-center">
            <div class="col-md-1"> <!-- Columna para el número de jugador -->
                <strong>Jugador</strong>
            </div>
            <div class="col-md-3"> <!-- Columna para el nombre del jugador -->
                <strong>Nombre</strong>
            </div>
            <div class="col-md-2"> <!-- Columna para el color elegido -->
                <strong>Color</strong>
            </div>
            <div class="col-md-2"> <!-- Columna para la casilla actual -->
                <strong>Casilla</strong>
            </div>
            <div class="col-md-2"> <!-- Columna para el turno y botón de tirar dado -->
                <strong>Turno</strong>
            </div>
        </div>
    `;

    // Generar controles de los jugadores y añadir fichas al tablero
    for (let i = 0; i < numJugadores; i++) {
        let nombre = $(`#nombreJugador${i + 1}`).val() || `Jugador ${i + 1}`;
        let color = $(`#colorJugador${i + 1}`).val() || 'red';

        // Generar ficha y controles de jugador
        let fichaHtml = `<div id="ficha${i}" class="ficha" style="background-color: ${color};"></div>`;
        $('#tablero').append(fichaHtml); // Añadir la ficha al tablero

        controlesJugadores += `
            <div class="row mb-3 justify-content-center align-items-center"> <!-- Ajuste de alineación vertical -->
                <div class="col-md-1 text-center"> <!-- Mostrar el número del jugador -->
                    <strong>${i + 1}</strong>
                </div>
                <div class="col-md-3 text-center"> <!-- Mostrar el nombre del jugador -->
                    ${nombre}
                </div>
                <div class="col-md-2 text-center color-column"> <!-- Mostrar el color elegido -->
                    <div class="color-indicador" style="background-color: ${color};"></div>
                </div>
                <div class="col-md-2 text-center" id="casilla${i}"> <!-- Mostrar la casilla actual del jugador -->
                    1
                </div>
                <div class="col-md-2 text-center d-flex justify-content-center" id="btnTirarDado${i}"> <!-- Mostrar el turno y botón de tirar dado -->
                    <button class="btn btn-primary" onclick="reproducirGif(${i}); reproducirSonidoDado();" style="background-color: transparent; border-color: transparent;">
                        <img id="gifDado${i}" src="img/dicestop.png" alt="Dado" style="width: 50px; height: 50px;">
                    </button>
                </div>
            </div>
        `;
    }

    // Actualizar el HTML con los controles de los jugadores
    document.getElementById('controlesJugadores').innerHTML = controlesJugadores;
    document.getElementById('controlesJugadores').style.display = 'block';

    // Colocar las fichas en la casilla de salida
    for (let i = 0; i < numJugadores; i++) {
        let left = '75px';
        let bottom = `${(numJugadores - i - 1) * 20}px`; // Ajuste para colocar las fichas verticalmente con menor distancia entre ellas
        $(`#ficha${i}`).css({ left, bottom });
    }

    // Cerrar el modal de configuración
    $('#nombreModal').modal('hide');
}


// FUNCIÓN PARA REPRODUCIR EL GIF DEL DADO
function reproducirGif(index) {
    let gif = document.getElementById(`gifDado${index}`);
    gif.src = "img/dice.gif"; // Cambiar la imagen estática por el GIF

    // Reproducir el GIF una vez
    gif.addEventListener('load', function() {
        gif.style.animation = 'none'; // Detener la animación

        // Ajustar la velocidad de la animación del GIF
        gif.style.animationDuration = '0.5s'; // Duplicar la velocidad (0.5s en lugar de 1s)

        setTimeout(function() {
            moverFicha(index);
        }, 500); // Mostrar el resultado después de 0.5 segundos
    }, { once: true });
}

// Función para reproducir el sonido al hacer clic en el dado
function reproducirSonidoDado() {
    const audio = new Audio('media/dice.mp3');
    audio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
}

// Función para mover la ficha
function moverFicha(index) {
    // Genera un número aleatorio entre 1 y 6 para los movimientos
    let movimientos = Math.floor(Math.random() * 6) + 1;
    let resultadoDado = $('#resultadoDado' + index);
    let btnTirarDado = $(`#btnTirarDado${index}`);

    btnTirarDado.html(`<img src="img/dice.gif" alt="Dado" style="width: 50px; height: 50px;">`); // Reproduce el GIF del dado
    reproducirSonidoDado(); // Reproduce el sonido del dado

    setTimeout(() => {
        btnTirarDado.html(`<img src="img/${movimientos}.png" alt="${movimientos}" style="width: 50px; height: 50px;">`);
    }, 100);  // Reducido el tiempo de espera a 100 milisegundos (0.1 segundos)

    let jugador = jugadores[index];

    for (let i = 0; i < movimientos; i++) {
        // Determinar la dirección del movimiento de la ficha en el tablero
        jugador.posicion++;
        if (jugador.posicion >= tablero.length) {
            jugador.posicion = tablero.length - 1;
        }

        // Ajustar la posición de la ficha en la casilla
        ajustarPosicionFicha(jugador, jugador.posicion);

        // Obtener la nueva posición del tablero
        let nuevaPosicion = tablero[jugador.posicion];

        // Animación para mover la ficha a la nueva posición
        $(`#ficha${index}`).animate({
            left: nuevaPosicion.posicionX + 'px',
            bottom: nuevaPosicion.posicionY + 'px'
        }, {
            duration: 400,
            complete: function() {
                // Reproducir el sonido de movimiento al finalizar la animación
                reproducirSonidoMovimiento();

                // Actualizar la casilla del jugador en el HTML
                $(`#casilla${index}`).text(jugador.posicion + 1);

                // Actualizar la visibilidad del botón de tirar dado
                if (jugador.posicion >= tablero.length - 1 || !jugador.turno) {
                    btnTirarDado.hide();
                } else {
                    btnTirarDado.show();
                }
            }
        });
    }

    // Comprobar si el jugador ha llegado a la casilla final
    if (jugador.posicion >= tablero.length - 1) { // Casilla final
        // Añadir al jugador al ranking
        resultados.push({ posicion: resultados.length + 1, jugador: jugador.nombre });
        $('#resultados tbody').append(`<tr><td>${resultados.length}</td><td>${jugador.nombre}</td></tr>`);
        
        // Mostrar el ranking si todos los jugadores han terminado
        if (resultados.length === numJugadores) {
            mostrarRanking();
        } else {
            // Cambiar el turno al siguiente jugador
            jugador.turno = false;
            turno = (turno + 1) % numJugadores;
            jugadores[turno].turno = true;

            // Actualizar los botones de tirar dado
            actualizarBotonesTurno();
        }
    } else {
        // Cambiar el turno al siguiente jugador
        jugador.turno = false;
        turno = (turno + 1) % numJugadores;
        jugadores[turno].turno = true;

        // Actualizar los botones de tirar dado
        actualizarBotonesTurno();
    }
}

// Función para actualizar los botones de tirar dado
function actualizarBotonesTurno() {
    for (let i = 0; i < numJugadores; i++) {
        if (jugadores[i].turno && jugadores[i].posicion < tablero.length - 1) {
            $(`#btnTirarDado${i}`).show();
        } else {
            $(`#btnTirarDado${i}`).hide();
        }
    }
}





//FUNCIÓN PARA REPRODUCIR SONIDO DE MOVIMIENTO DE FICHA
function reproducirSonidoMovimiento() {
    const audio = document.getElementById('sonidoMovimiento');
    audio.currentTime = 0;  // Reiniciar el audio al principio
    audio.play().catch(error => {
        console.error("Error al reproducir el audio:", error);
    });
}


// Función para ajustar la posición de la ficha en la casilla
function ajustarPosicionFicha(jugador, casilla) {
    // Obtener la posición X e Y de la casilla
    let { posicionX, posicionY } = tablero[casilla];

    // Ajustar posición de la ficha si hay otra ficha en la misma casilla
    let ajusteX = 0;
    let ajusteY = 0;

    // Contar las fichas en la casilla
    let numFichasEnCasilla = 0;
    for (let i = 0; i < numJugadores; i++) {
        if (jugadores[i].posicion === casilla) {
            numFichasEnCasilla++;
        }
    }

    // Ajustar posición basado en el número de fichas en la casilla
    switch (numFichasEnCasilla) {
        case 2:
            ajusteX = 20 * (jugador.id % 2 === 0 ? -1 : 1); // Mueve la ficha a la izquierda o derecha
            ajusteY = 20;
            break;
        case 3:
            ajusteX = 20 * (jugador.id % 3 === 0 ? -1 : (jugador.id % 3 === 1 ? 0 : 1)); // Mueve la ficha a la izquierda, derecha o queda en el centro
            ajusteY = 20;
            break;
        case 4:
            ajusteX = 20 * (jugador.id % 4 === 0 ? -1 : (jugador.id % 4 === 1 ? 1 : (jugador.id % 4 === 2 ? -1 : 1))); // Distribuye las fichas en los cuatro lados
            ajusteY = 20 * (jugador.id < 2 ? 1 : -1); // Mueve la ficha hacia arriba o abajo
            break;
    }

    let left = `${posicionX + ajusteX}px`;
    let bottom = `${posicionY + ajusteY}px`;

    // Mover la ficha
    $(`#ficha${jugador.id}`).css({ left, bottom });
}




// Función para actualizar los botones de turno
function actualizarBotonesTurno() {
    for (let i = 0; i < numJugadores; i++) {
        $(`#btnTirarDado${i}`).html(jugadores[i].turno ? 
            `<button class="btn btn-primary" onclick="reproducirGif(${i}); reproducirSonidoDado();" style="background-color: transparent; border-color: transparent;">
                <img id="gifDado${i}" src="img/dicestop.png" alt="Dado" style="width: 50px; height: 50px;">
            </button>` 
            : '');
    }
}


// Función para mostrar el ranking de los jugadores
function mostrarRanking() {
    $('#rankingModal').modal('show');
    let rankingHtml = '';
    for (let i = 0; i < resultados.length; i++) {
        rankingHtml += `<tr><td>${resultados[i].posicion}</td><td>${resultados[i].jugador}</td></tr>`;
    }
    $('#ranking tbody').html(rankingHtml);
}

// Función para reiniciar la partida
function reiniciarPartida() {
    // Colocar las fichas en la casilla de salida
    for (let i = 0; i < numJugadores; i++) {
        let left = '75px';
        let bottom = `${(numJugadores - i - 1) * 30}px`; // Ajuste para colocar las fichas verticalmente
        $(`#ficha${i}`).css({ left, bottom });
    }
}

// Función para reiniciar el juego
function reiniciarJuego() {
    $('#configModal').modal('show');
    $('#controlesJugadores').empty();
    $('#tablero').empty();
    $('#nombreModal').modal('hide');
}
