const evento = {
    nombre: "Yenny",
    fecha: "10 de Octubre de 2026",
    lugar: "Salón Quinta de los Tres Hermanos",
    dressCode: "Elegante Sport",
    alias: "yyyyyyyy"
};


const app = document.getElementById("app");


function crearIntro() {

    app.innerHTML = `
        <section class="intro" id="intro">

            <!-- Luz ambiental detrás del portón -->
            <div class="luz-central"></div>


            <!-- =========================
                 PORTÓN
            ========================== -->

            <div class="porton">

                <!-- HOJA IZQUIERDA -->

                <svg
                    class="hoja hoja-izquierda"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <!-- Marco exterior -->
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


                    <!-- Marco interior -->
                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 220
                            Q 20 105 480 65
                            L 480 865
                        "
                    />


                    <!-- Barrotes -->
                    <g class="barrotes">

                        <line x1="45"  y1="215" x2="45"  y2="850"/>
                        <line x1="95"  y1="180" x2="95"  y2="850"/>
                        <line x1="145" y1="150" x2="145" y2="850"/>
                        <line x1="195" y1="120" x2="195" y2="850"/>
                        <line x1="245" y1="100" x2="245" y2="850"/>
                        <line x1="295" y1="90"  x2="295" y2="850"/>
                        <line x1="345" y1="95"  x2="345" y2="850"/>
                        <line x1="395" y1="115" x2="395" y2="850"/>
                        <line x1="445" y1="155" x2="445" y2="850"/>

                    </g>


                    <!-- Ornamentación -->
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


                    <!-- Detalles decorativos -->
                    <g class="decoracion">

                        <circle cx="45"  cy="215" r="8"/>
                        <circle cx="95"  cy="180" r="8"/>
                        <circle cx="145" cy="150" r="8"/>
                        <circle cx="195" cy="120" r="8"/>
                        <circle cx="245" cy="100" r="8"/>
                        <circle cx="295" cy="90"  r="8"/>
                        <circle cx="345" cy="95"  r="8"/>
                        <circle cx="395" cy="115" r="8"/>
                        <circle cx="445" cy="155" r="8"/>

                    </g>

                </svg>



                <!-- HOJA DERECHA -->

                <svg
                    class="hoja hoja-derecha"
                    viewBox="0 0 500 900"
                    preserveAspectRatio="xMidYMid meet"
                >

                    <!-- Marco exterior -->
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


                    <!-- Marco interior -->
                    <path
                        class="hierro medio"
                        d="
                            M 20 865
                            L 20 65
                            Q 480 105 480 220
                            L 480 865
                        "
                    />


                    <!-- Barrotes -->
                    <g class="barrotes">

                        <line x1="55"  y1="155" x2="55"  y2="850"/>
                        <line x1="105" y1="115" x2="105" y2="850"/>
                        <line x1="155" y1="95"  x2="155" y2="850"/>
                        <line x1="205" y1="90"  x2="205" y2="850"/>
                        <line x1="255" y1="100" x2="255" y2="850"/>
                        <line x1="305" y1="120" x2="305" y2="850"/>
                        <line x1="355" y1="150" x2="355" y2="850"/>
                        <line x1="405" y1="180" x2="405" y2="850"/>
                        <line x1="455" y1="215" x2="455" y2="850"/>

                    </g>


                    <!-- Ornamentación -->
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


                    <!-- Detalles decorativos -->
                    <g class="decoracion">

                        <circle cx="55"  cy="215" r="8"/>
                        <circle cx="105" cy="180" r="8"/>
                        <circle cx="155" cy="150" r="8"/>
                        <circle cx="205" cy="120" r="8"/>
                        <circle cx="255" cy="100" r="8"/>
                        <circle cx="305" cy="90"  r="8"/>
                        <circle cx="355" cy="95"  r="8"/>
                        <circle cx="405" cy="115" r="8"/>
                        <circle cx="455" cy="155" r="8"/>

                    </g>

                </svg>

            </div>



            <!-- =========================
                 CENTRO DEL PORTÓN
            ========================== -->

            <div class="centro-porton">
                <div class="adorno-centro"></div>
            </div>



            <!-- =========================
                 MARIPOSA
            ========================== -->

            <img
                class="mariposa-intro"
                src="img/mariposa.png"
                alt="Mariposa plateada"
            >

        </section>
    `;
}


crearIntro();