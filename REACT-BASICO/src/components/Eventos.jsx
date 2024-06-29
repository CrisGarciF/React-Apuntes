import React, {Component} from "react";


export  class EventosES6 extends Component{
    constructor(props){
        super(props);
        this.state = {
            contador: 0,
        }

        this.sumar = this.sumar.bind(this);
        this.restar = this.restar.bind(this);
    }

    sumar(e){
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar(e){
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos En Componentes de Clase ES6</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3> {this.state.contador} </h3>
            </div>
        )
    }
}

export  class EventosES7 extends Component{
        state = {
            contador: 0,
        }

    sumar = (e) =>{
        this.setState({
            contador: this.state.contador + 1,
        })
    }

    restar = (e) =>{
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render(){
        return(
            <div>
                <h2>Eventos En Componentes de Clase ES7</h2>
                <nav>
                    <button onClick={this.sumar}> + </button>
                    <button onClick={this.restar}> - </button>
                </nav>
                <h3> {this.state.contador} </h3>
            </div>
        )
    }
}

function Boton(props){
    return(<button onClick={props.myOnClick}>Boton Hecho Componente</button>)
}


export class MasSobreEventos extends Component{
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.nativeEvent);
        console.log(e.target);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }

    render(){
        return(
            <div>
                <h2>Mas Sobre Eventos</h2>
                <button onClick={(e)=> this.handleClick(e, "Hola Pasando Parametro desde un evento")}>Saludar</button>
                <Boton myOnClick={(e)=> this.handleClick(e, "Hola Pasando Parametro desde un evento")}/>
            </div>
        )
    }
}