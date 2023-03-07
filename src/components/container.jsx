import React from "react";


export function ContenedorSeccion(props){
    return(

        <div className="contenedorProp">

            <div className="contenidoPrincipal">
                <h1>{props.h1}</h1>
                <p>{props.parrafo}</p>
            </div>
            <div className="imagesContainer">
                <img src={props.img} alt="" />
                <p>{props.parrafoImg1}</p>

                <img src={props.img2} alt="" />
                <p>{props.parrafoImg2}</p>

                <img src={props.img3} alt="" />
                <p>{props.parrafoImg3}</p>

                <img src={props.img4} alt="" />
                <p>{props.parrafoImg4}</p>

                <img src={props.img5} alt="" />
                <p>{props.parrafoImg5}</p>

                <img src={props.img6} alt="" />
                <p>{props.parrafoImg6}</p>

                <img src={props.img7} alt="" />
                <p>{props.parrafoImg7}</p>

                <img src={props.img8} alt="" />
                <p>{props.parrafoIm8}</p>
                
                <img src={props.img9} alt="" />
                <p>{props.parrafoImg9}</p>

                <img src={props.img10} alt="" />
                <p>{props.parrafoImg10}</p>

                <img src={props.img11} alt="" />
                <p>{props.parrafoImg11}</p>
            </div>
            <div className="elementos">

            </div>
        </div>
    );
}

export function Formulario(props){
    return(
        <div><h1>{props.hola}</h1></div>
    );
}