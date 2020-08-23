import React, {  Component } from 'react';
import Axios from 'axios';
import UsersGrid from '../Organisms/UsersGrid'

// creamos una clase
class Users extends Component{
    // creamos un constructor
    constructor(props){
        super(props)

        this.state ={
            users: []
        }
    }

    // con este metodo usamos el (fetch) para llamar a la api
    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users', {method:'get'})
    //     .then( Response => Response.json())
    //     .then( Response2 => {
    //         this.setState({
    //             users: Response2
    //         })
    //     })
    // }

    // con la libreria (axios)llamamos a la api
    // lo instalamos con el comando ( npm add axios)
    componentDidMount(){
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then( Response => {
            this.setState({
                users: Response.data
            })
        })
    }

    render() {

        const {users} = this.state

        return <UsersGrid users={users}/>
    }
}

export default Users;