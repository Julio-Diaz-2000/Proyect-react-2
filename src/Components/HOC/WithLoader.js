import React, { Component } from 'react'

// HOC es hai order component
const WithLoader = (propValue) => (WrappedComponent) => {
    return class WithLoader extends Component {

        constructor(props) {
            super(props)
        }

        render(){
            return this.props[propValue].length === 0 
            ?<h1>Cargando...</h1> 
            : <WrappedComponent {...this.props}/>
        }
    }
}

export default WithLoader