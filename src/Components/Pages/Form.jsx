import React , {Component} from 'react';

class Form extends Component {

    constructor(props){
        super(props)

        this.state = {
            nombre: "",
            Correo: "",
            fecha: new Date()
        }
        /*Para Configurar el this con los metodos creados */
        this.CambiarNombre = this.CambiarNombre.bind(this)   
        this.CambiarCorreo = this.CambiarCorreo.bind(this)
        this.CambiarFecha = this.CambiarFecha.bind(this)
    }  

    /*metodo creado para el cambio de nombre */
    CambiarNombre(e) {
             this.setState({
                nombre: e.target.value
            })    
        }

    CambiarCorreo(e){
        this.setState({
           Correo: e.target.value
        })
    }

    CambiarFecha() {
        this.setState({
            fecha: new Date()
        })
    }

    render() {
        return (
            <div className="ed-grid">
                <h1>Formulario {this.props.name}</h1>
                <h4>Fecha Actual: {Math.ceil(this.state.fecha/1000)}</h4>
                <form id="elemento">
                    <div className="ed-grid m-grid-2">
                        <div className="form__item">
                            <label>Nombre Completo</label>
                            
                            {/*llamamos al metodo con el this y al nombre del metodo */}
                            <input type="text" onChange={this.CambiarNombre} />
                            
                        </div>
                        <div className="form__item">
                            <label>Correo Electronico</label>
                            <input type="email" onChange={this.CambiarCorreo} />
                        </div>
                    </div>
                </form>
                <div>
                    <h2>{`Hola ${this.state.nombre}`}</h2>
                    <span>{`Tu correo es: ${this.state.Correo}`}</span>
                </div>
            </div>
        )
    }

    /*demuestra el llamado del elemto selecionado */
    componentDidMount(){
        let elemento = document.getElementById("elemento")
        console.log(elemento)

        this.intervaloFecha = setInterval(() => {
            this.CambiarFecha()
            console.log(new Date())
        }, 1000)
    }

    /*puedes ver las actuaisaciones de cada cambio , si agregaste una una palabra te dice cual fue la anterior */
    componentDidUpdate(prevProps, prevState){
        console.log(prevProps)
        console.log(prevState)
    }


    componentWillUnmount(){
        clearInterval(this.intervaloFecha)
    }
}

export default Form