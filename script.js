const evento = {
    nombre: "Yenny",
    fecha: "10 de Octubre de 2026",
    lugar: "Salón Quinta de los Tres Hermanos",
    dressCode: "Elegante Sport",
    alias: "yyyyyyyy"
};

const app = document.getElementById("app");


/* =========================
   CREAR INTRO
========================= */

function crearIntro() {

    app.innerHTML = `

        <section class="intro" id="intro">

            <div class="luz-central"></div>


            <!-- =========================
                 PORTÓN
            ========================= -->

            <div class="porton">


                <!-- =========================
                     PUERTA IZQUIERDA
                ========================= -->

                <svg
                    class="hoja hoja-izquierda"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <path
                        class="hierro grueso"
                        d="
                            M 0 880
                            L 0 210
                            Q 0 70 500 30
                            L 500 880
                            Z
                        "
                    />

                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 220
                            Q 20 105 480 65
                            L 480 865
                        "
                    />


                    <g class="barrotes">

                        <line
                            x1="45"
                            y1="215"
                            x2="45"
                            y2="850"
                        />

                        <line
                            x1="95"
                            y1="180"
                            x2="95"
                            y2="850"
                        />

                        <line
                            x1="145"
                            y1="150"
                            x2="145"
                            y2="850"
                        />

                        <line
                            x1="195"
                            y1="120"
                            x2="195"
                            y2="850"
                        />

                        <line
                            x1="245"
                            y1="100"
                            x2="245"
                            y2="850"
                        />

                        <line
                            x1="295"
                            y1="90"
                            x2="295"
                            y2="850"
                        />

                        <line
                            x1="345"
                            y1="95"
                            x2="345"
                            y2="850"
                        />

                        <line
                            x1="395"
                            y1="115"
                            x2="395"
                            y2="850"
                        />

                        <line
                            x1="445"
                            y1="155"
                            x2="445"
                            y2="850"
                        />

                    </g>


                    <g class="ornamento">

                        <path
                            d="
                                M 35 220
                                Q 80 125 135 175
                                Q 185 220 250 120
                                Q 315 220 365 175
                                Q 420 125 465 220
                            "
                        />

                        <path
                            d="
                                M 90 210
                                Q 135 150 175 195
                                Q 210 225 250 165
                                Q 290 225 325 195
                                Q 365 150 410 210
                            "
                        />

                    </g>


                    <g class="decoracion">

                        <circle
                            cx="45"
                            cy="215"
                            r="8"
                        />

                        <circle
                            cx="95"
                            cy="180"
                            r="8"
                        />

                        <circle
                            cx="145"
                            cy="150"
                            r="8"
                        />

                        <circle
                            cx="195"
                            cy="120"
                            r="8"
                        />

                        <circle
                            cx="245"
                            cy="100"
                            r="8"
                        />

                        <circle
                            cx="295"
                            cy="90"
                            r="8"
                        />

                        <circle
                            cx="345"
                            cy="95"
                            r="8"
                        />

                        <circle
                            cx="395"
                            cy="115"
                            r="8"
                        />

                        <circle
                            cx="445"
                            cy="155"
                            r="8"
                        />

                    </g>

                </svg>


                <!-- =========================
                     PUERTA DERECHA
                ========================= -->

                <svg
                    class="hoja hoja-derecha"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <path
                        class="hierro grueso"
                        d="
                            M 0 880
                            L 0 30
                            Q 500 70 500 210
                            L 500 880
                            Z
                        "
                    />

                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 65
                            Q 480 105 480 220
                            L 480 865
                        "
                    />


                    <g class="barrotes">

                        <line
                            x1="55"
                            y1="155"
                            x2="55"
                            y2="850"
                        />

                        <line
                            x1="105"
                            y1="115"
                            x2="105"
                            y2="850"
                        />

                        <line
                            x1="155"
                            y1="95"
                            x2="155"
                            y2="850"
                        />

                        <line
                            x1="205"
                            y1="90"
                            x2="205"
                            y2="850"
                        />

                        <line
                            x1="255"
                            y1="100"
                            x2="255"
                            y2="850"
                        />

                        <line
                            x1="305"
                            y1="120"
                            x2="305"
                            y2="850"
                        />

                        <line
                            x1="355"
                            y1="150"
                            x2="355"
                            y2="850"
                        />

                        <line
                            x1="405"
                            y1="180"
                            x2="405"
                            y2="850"
                        />

                        <line
                            x1="455"
                            y1="215"
                            x2="455"
                            y2="850"
                        />

                    </g>


                    <g class="ornamento">

                        <path
                            d="
                                M 35 220
                                Q 80 125 135 175
                                Q 185 220 250 120
                                Q 315 220 365 175
                                Q 420 125 465 220
                            "
                        />

                        <path
                            d="
                                M 90 210
                                Q 135 150 175 195
                                Q 210 225 250 165
                                Q 290 225 325 195
                                Q 365 150 410 210
                            "
                        />

                    </g>


                    <!--
                        BOLITAS ALINEADAS CON
                        LA PUNTA DE CADA BARROTE
                    -->

                    <g class="decoracion">

                        <circle
                            cx="55"
                            cy="155"
                            r="8"
                        />

                        <circle
                            cx="105"
                            cy="115"
                            r="8"
                        />

                        <circle
                            cx="155"
                            cy="95"
                            r="8"
                        />

                        <circle
                            cx="205"
                            cy="90"
                            r="8"
                        />

                        <circle
                            cx="255"
                            cy="100"
                            r="8"
                        />

                        <circle
                            cx="305"
                            cy="120"
                            r="8"
                        />

                        <circle
                            cx="355"
                            cy="150"
                            r="8"
                        />

                        <circle
                            cx="405"
                            cy="180"
                            r="8"
                        />

                        <circle
                            cx="455"
                            cy="215"
                            r="8"
                        />

                    </g>

                </svg>

            </div>


            <!-- =========================
                 CENTRO DEL PORTÓN
            ========================= -->

            <div class="centro-porton">

                <div class="adorno-centro">

                    <div class="rombo-centro"></div>

                </div>

            </div>


            <!-- =========================
                 PARTÍCULAS
            ========================= -->

            <div
                class="particulas"
                id="particulas"
            ></div>


            <!-- =========================
                 MENSAJE
            ========================= -->

            <div class="mensaje-intro">

                <p class="mensaje-linea">
                    Hay momentos que merecen
                </p>

                <p class="mensaje-linea">
                    ser recordados para siempre...
                </p>

            </div>


            <!-- =========================
                 MARIPOSA
            ========================= -->

            <div
                class="mariposa-vuelo"
                id="mariposa-vuelo"
            >

                <div class="mariposa-flotante">

                    <img
                        class="mariposa-intro"
                        id="mariposa"
                        src="img/mariposa.png"
                        alt="Mariposa plateada"
                    >

                </div>

            </div>

        </section>
    `;
}

crearIntro();


/* =========================
   REFERENCIAS
========================= */

const intro =
    document.getElementById("intro");

const mariposaVuelo =
    document.getElementById("mariposa-vuelo");

const mariposa =
    document.getElementById("mariposa");

const particulas =
    document.getElementById("particulas");


/* =========================
   CARGA DE MARIPOSA
========================= */

mariposa.style.opacity = "0";

if (mariposa.complete) {

    mariposa.style.opacity = "1";

} else {

    mariposa.addEventListener(
        "load",
        () => {
            mariposa.style.opacity = "1";
        },
        { once: true }
    );
}


/* =========================
   ESPERAR
========================= */

function esperar(ms) {

    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}


/* =========================
   CREAR BRILLITO
========================= */

function crearBrillito(x, y) {

    const brillo =
        document.createElement("span");

    brillo.className =
        "brillito";

    const variacionX =
        (Math.random() - 0.5) * 24;

    const variacionY =
        (Math.random() - 0.5) * 24;

    brillo.style.left =
        `${x + variacionX}px`;

    brillo.style.top =
        `${y + variacionY}px`;

    const tamanio =
        2 + Math.random() * 4;

    brillo.style.width =
        `${tamanio}px`;

    brillo.style.height =
        `${tamanio}px`;

    brillo.style.animationDuration =
        `${1.2 + Math.random() * 1.2}s`;

    particulas.appendChild(brillo);

    setTimeout(() => {
        brillo.remove();
    }, 2600);
}


/* =========================
   BRILLITOS CONTINUOS
========================= */

let intervaloBrillos = null;

function comenzarBrillos() {

    intervaloBrillos =
        setInterval(() => {

            const rect =
                mariposa.getBoundingClientRect();

            const x =
                rect.left +
                rect.width / 2;

            const y =
                rect.top +
                rect.height / 2;

            crearBrillito(x, y);

            if (Math.random() > 0.65) {

                crearBrillito(
                    x +
                    (Math.random() - 0.5) * 40,

                    y +
                    (Math.random() - 0.5) * 40
                );
            }

        }, 130);
}


function detenerBrillos() {

    clearInterval(intervaloBrillos);

    intervaloBrillos = null;
}


/* =========================
   SECUENCIA PRINCIPAL
========================= */

async function iniciarSecuencia() {

    /* =========================
       1. PORTÓN CERRADO
    ========================= */

    await esperar(3000);


    /* =========================
       2. ABRIR PORTÓN
       + VUELO AL MISMO TIEMPO
    ========================= */

    intro.classList.add(
        "abriendo"
    );


    /* =========================
       3. VUELO
    ========================= */

    comenzarBrillos();

    const vuelo =
        mariposaVuelo.animate(
            [
                {
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotate(0deg) scale(1)"
                },

                {
                    left: "65%",
                    top: "39%",
                    transform:
                        "translate(-50%, -50%) rotate(9deg) scale(1.05)",
                    offset: 0.10
                },

                {
                    left: "77%",
                    top: "28%",
                    transform:
                        "translate(-50%, -50%) rotate(16deg) scale(1.08)",
                    offset: 0.20
                },

                {
                    left: "63%",
                    top: "24%",
                    transform:
                        "translate(-50%, -50%) rotate(-7deg) scale(1.11)",
                    offset: 0.30
                },

                {
                    left: "35%",
                    top: "31%",
                    transform:
                        "translate(-50%, -50%) rotate(-14deg) scale(1.15)",
                    offset: 0.42
                },

                {
                    left: "21%",
                    top: "46%",
                    transform:
                        "translate(-50%, -50%) rotate(-19deg) scale(1.18)",
                    offset: 0.52
                },

                {
                    left: "34%",
                    top: "66%",
                    transform:
                        "translate(-50%, -50%) rotate(13deg) scale(1.23)",
                    offset: 0.63
                },

                {
                    left: "67%",
                    top: "72%",
                    transform:
                        "translate(-50%, -50%) rotate(17deg) scale(1.28)",
                    offset: 0.75
                },

                {
                    left: "78%",
                    top: "55%",
                    transform:
                        "translate(-50%, -50%) rotate(-7deg) scale(1.34)",
                    offset: 0.84
                },

                {
                    left: "65%",
                    top: "43%",
                    transform:
                        "translate(-50%, -50%) rotate(-3deg) scale(1.45)",
                    offset: 0.91
                },

                {
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotate(0deg) scale(1.65)"
                }
            ],
            {
                duration: 9000,

                easing:
                    "cubic-bezier(0.45, 0, 0.25, 1)",

                fill: "forwards"
            }
        );


    /* =========================
       4. ESPERAR APERTURA
       DEL PORTÓN
    ========================= */

    await esperar(2800);


    /* =========================
       5. MOSTRAR MENSAJE
    ========================= */

    intro.classList.add(
        "mostrar-mensaje"
    );


    /* =========================
       6. DEJAR FRASE
    ========================= */

    await esperar(4200);


    /* =========================
       7. OCULTAR MENSAJE
    ========================= */

    intro.classList.add(
        "ocultar-mensaje"
    );


    /* =========================
       8. ESPERAR FIN DEL VUELO
    ========================= */

    await vuelo.finished;


    /* =========================
       9. DETENER BRILLITOS
    ========================= */

    detenerBrillos();


    /* =========================
       10. ACERCAMIENTO FINAL
    ========================= */

    const acercamiento =
        mariposaVuelo.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(1.65)"
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(2.0)",

                    offset: 0.15
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(2.5)",

                    offset: 0.30
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(3.2)",

                    offset: 0.45
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(4.1)",

                    offset: 0.60
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(5.2)",

                    offset: 0.75
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(6.5)",

                    offset: 0.88
                },

                {
                    transform:
                        "translate(-50%, -50%) scale(8.0)"
                }
            ],
            {
                duration: 3000,

                easing:
                    "cubic-bezier(0.7, 0, 0.12, 1)",

                fill: "forwards"
            }
        );

    await acercamiento.finished;


    /* =========================
       11. TRANSICIÓN FINAL
    ========================= */

    intro.classList.add(
        "transicion-final"
    );
}


/* =========================
   INICIAR
========================= */

iniciarSecuencia();