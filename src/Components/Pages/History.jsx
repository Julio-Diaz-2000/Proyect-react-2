import React from 'react';

const History = ({match, location, history}) => (
    <div>
        {/*es para ver el histial y los parametros de tu web */}
        {JSON.stringify(match)}
        <br></br>
        <br></br>
        {JSON.stringify(location)}
        <br></br>
        <br></br>
        {JSON.stringify(history)}
    </div>
)
 
export default History;