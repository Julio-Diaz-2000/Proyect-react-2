import React, { Fragment } from 'react';
import UserCard from '../Molecules/UserCard';
import WithLoader from '../HOC/WithLoader';

const UserGrid = ({users}) => {
    return ( 
        <Fragment>
            <div className="ed-grid">
                <h1>Usuarios</h1>
                <div className="ed-grid s-grid-2 m-grid-3 l-grid-4" >
                    {
                    users.map(u => (<UserCard 
                        key={u.id}
                        name={u.name}
                        username={u.username}
                        email={u.email}
                        />))
                        }
                </div>
            </div>
    </Fragment>
    );
}
 
export default WithLoader("users")(UserGrid) ;