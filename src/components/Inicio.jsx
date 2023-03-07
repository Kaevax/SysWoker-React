import React, { useEffect, useRef } from "react";
import Typed from "typed.js";


export function Maincontainer(props) {
    /*const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings: [ "Fronted Developer" ],
            startDelay: 300,
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            smartBackspace: true,
            showCursor: false,
            loop: true
        })
    })*/

    return(
        <div id="contenedor-prin">
            <div className="Inicio">
                <div>
                    <h1>Hola!</h1>
                    <p>Somos <span>SysWoker</span></p>
                </div>
            </div>

            <div className="Proyectos">
                <h1>Proyectos</h1>
                <span></span>
                <div>
                    <h4>proyecto1</h4>
                    <h4>proyecto1</h4>
                    <h4>proyecto1</h4>
                </div>
            </div>
        </div>
    );
}