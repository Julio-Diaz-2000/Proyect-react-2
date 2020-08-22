import React, { Fragment, Component } from 'react';
import UserCard from '../Molecules/UserCard';
import Axios from 'axios';

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

        return(
            <Fragment>
                <div className="ed-grid">
                    <h1>Usuarios</h1>
                    <div className="ed-grid s-grid-2 m-grid-3 l-grid-4" >
                        {users.map(u => (<UserCard 
                        key={u.id}
                        name={u.name}
                        username={u.username}
                        email={u.email}
                        />))}
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Users;