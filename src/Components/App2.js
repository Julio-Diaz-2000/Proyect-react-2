import React, { Fragment } from 'react';
import '../Styles/styles.scss';
import Form from './Pages/Form'
import CourseGrid from './Organisms/CourseGrid';
//estas importando el enrutamiento para las paginas 
//usas primero el (npm add react-router-dom)
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Course from './Pages/Course'
import MainMenu from './Organisms/MainMenu'
import History from './Pages/History';
import Home from './Pages/Home';
import Users from './Pages/Users';





/*const App2 = () => {
    return ( 
        <Fragment>
            <Banner /> 
             <Form name="Nuevo" /> 
            <CourseGrid />
        </Fragment>
     );
}*/

//RECUERDA EL ORDEN EN EL (SWITCH) ES TODO TENER UN ORDEN PARA QUE FUNCIONE LOS COMPONENTES//
const App2 = () => {
    return ( 
        //usas el (Router para el enrutamiento a cada pagina)
        //el (switch lo usas para que coloques una pagina por defecto un error)
        <Router>
            <MainMenu/>
            <Switch>
                {/* usas en (path) para seleccionar el destino en este caso es el home */}
                {/* el (exact) es para elegir y llamar al component solo se usa una ves en la pagina inicial */}
                {/* en el (component) se llama al nombre de componante */}
            <Route path="/" exact component={Home}/>
            <Route path="/cursos/:id"  component={Course}/>
            <Route path="/cursos"  component={CourseGrid}/>
            <Route path="/historial/:valor"  component={History}/>
            <Route path="/historial"  component={History}/>
            {/*se llama a la ruta y se pone los (:) como para indicar el id exacto */}
           <Route path="/usuarios" component={Users} />
            <Route path="/formulario"  component={() => <Form name="Nuevo"/>}/>
            {/*este es la pagina por defecto si en caso hay un eror indicando */}
            <Route component={() => (
                <div className="ed-grid">
                    <h1>Error 404</h1>
                    <span>Pagina no encontrada</span>
                </div> 
            )}/>
            </Switch>
        </Router>
     );
}
 
export default App2;