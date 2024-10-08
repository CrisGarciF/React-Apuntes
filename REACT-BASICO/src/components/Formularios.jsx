import React, {useState} from "react";

//VERSION SENSILLA

/* export default function Formularios(){
    const [nombre, setNombre] = useState("")
    const [sabor, setSabor] = useState("")
    const [lenguaje, setLenguaje] = useState("")
    const [terminos, setTerminos] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("El formulario se a enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)}/>

                <p>Elige tu sabor JS Favorito:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id="react" name="sabor" value="react" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="react">React</label>

                <input type="radio" id="vue" name="sabor" value="vue" onChange={(e) => setSabor(e.target.value)}/>
                <label htmlFor="vue">Vue</label>

                <p>Elige tu lenguaje de programacion Favorito</p>
                <select name="lenguajes" onChange={(e) => setLenguaje(e.target.value)} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={(e) => setTerminos(e.target.checked)} />
                <br />
                <input type="submit" />
            </form>
        </>
    );
} */


//VERSION AVANZADA

export default function Formularios(){
    const [form, setForm] = useState({})
    
    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }

    const handleChecked = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.cheked,
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("El formulario se a enviado")
    }

    return(
        <>
            <h2>Formularios</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" value={form.nombre} onChange={handleChange}/>

                <p>Elige tu sabor JS Favorito:</p>
                <input type="radio" id="vanilla" name="sabor" value="vanilla" onChange={handleChange}/>
                <label htmlFor="vanilla">Vanilla</label>

                <input type="radio" id="react" name="sabor" value="react" onChange={handleChange}/>
                <label htmlFor="react">React</label>

                <input type="radio" id="vue" name="sabor" value="vue" onChange={handleChange}/>
                <label htmlFor="vue">Vue</label>

                <p>Elige tu lenguaje de programacion Favorito</p>
                <select name="lenguajes" onChange={handleChange} defaultValue="">
                    <option value="">---</option>
                    <option value="js">JavaScript</option>
                    <option value="php">PHP</option>
                    <option value="py">Python</option>
                    <option value="go">GO</option>
                    <option value="rb">Ruby</option>
                </select>
                <br />
                <label htmlFor="terminos">Acepto terminos y condiciones</label>
                <input type="checkbox" name="terminos" id="terminos" onChange={handleChecked} />
                <br />
                <input type="submit" />
            </form>
        </>
    );
}