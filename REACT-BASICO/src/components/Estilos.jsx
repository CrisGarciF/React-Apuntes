import React from "react";
import "./Estilos.css";
//import "./Estilos.scss";
import moduleStyles from "./Estilos.module.css";

export default function Estilos(){
    let myStyles = {
        borderRadius: ".5rem",
        margin: "2rem auto",
        maxWidth:"50%",
        color:"black",
    }
    return(
        <section className="estilos">
            <h2>Estilos en React</h2>
            <h3 className="bg-react">Estilos en hoja css externa</h3>
            <h3 className="bg-react" style={{borderRadius:".25rem", margin:"1rem"}}>Estilos en linea(atributo style)</h3>
            <h3 className="bg-react" style={myStyles}>Estilos en liena</h3>
            <h3 className="bg-react">Agregando Normalize con 
                <br />
                <code>@import-normalize;</code>
            </h3>
            <h3 className={moduleStyles.error}>Estilos con Modulos</h3>
            <h3 className={moduleStyles.success}>Estilos con Modulos</h3>
            <h3 className="bg-sass">Estilos con SASS</h3>
        </section>
    )
}