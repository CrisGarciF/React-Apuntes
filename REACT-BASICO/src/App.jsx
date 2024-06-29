import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Componente from './components/Componente'
import Propiedades from './components/Propiedades'
import Estado from './components/Estado'
import RenderizadoCondicional from './components/RenderizadoCondicional'
import RenderizadoElementos from './components/RenderizadoElemntos'
import {EventosES6, EventosES7, MasSobreEventos} from './components/Eventos'
import Padre from './components/ComunicacionComponentes'
import CicloVida from './components/CicloVida'
import AjaxApis from './components/AjaxApis'
import ContadorHooks from './components/ContadorHooks'
import ScrollHooks from './components/ScrollHooks'
import RelojHooks from './components/RelojHooks'
import AjaxHooks from './components/AjaxHooks'
import HooksPersonalizados from './components/HooksPersonalizados'
import Referencias from './components/Referencias'
import Formularios from './components/Formularios'
import Estilos from './components/Estilos'
import ComponentesEstilizados from './components/ComponentesStilizados'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <section>
        <Componente msj="Hola soy un componente desde prop funcional expresado" />
        <hr />
        <Propiedades 
         cadena= "Esto es una cadena de Texto"
         numero = {19} 
         booleano= {true}
         arreglo= {[1,2,3]}
         objecto= {{nombre:"Crsitian", correo:"garciamesacristian@gmail.exe"}}
         funcion= {(num) => num * num}
         elementoReact= { <i>Esto es un elemento react</i> }
         componenteReact= { <Componente msj="Hola soy lo mas verga"/> }
        />
        <hr />
        <Estado />
        <hr />
        <RenderizadoCondicional />
        <hr />
        <RenderizadoElementos />
        <hr />
        <EventosES6 />
        <hr />
        <EventosES7 />
        <hr />
        <MasSobreEventos />
        <hr />
        <Padre />
        <hr />
        <CicloVida />
        <hr />
        <AjaxApis />
        <hr />
        <ContadorHooks />
        <hr />
        <ScrollHooks />
        <hr />
        <RelojHooks />
        <hr />
        {/* <AjaxHooks /> */}
        <hr />
        <HooksPersonalizados />
        <hr />
        <Referencias />
        <hr />
        <Formularios />
        <br />
        <br />
        <hr />
        <Estilos />
        <hr />
        <ComponentesEstilizados />
      </section>
    </>
  )
}

export default App
