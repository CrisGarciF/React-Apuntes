import React, {useState, useEffect} from "react";

export default function ScrollHooks(){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        /* console.log("Moviendo el Scroll"); */

        const dectetarScroll = () => setScrollY(window.pageYOffset);

        window.addEventListener("scroll", dectetarScroll);

        return()=>{ 
            window.removeEventListener("scroll", dectetarScroll);
        }
    }, [scrollY]);

    useEffect(()=> {
        /* console.log("Fase de MOntaje"); */
    }, []);

    useEffect(()=> {
        /* console.log("Fase de Actualizacion"); */
    });

    useEffect(()=> {
        return() =>{
            /* console.log("Fase de desmosntaje"); */
        };

    });

    return(
        <>
            <h2>Hooks - useEffect y el ciclo de vida</h2>
            <p> Scroll Y del Navegador {scrollY}px </p>
        </>
    );
}