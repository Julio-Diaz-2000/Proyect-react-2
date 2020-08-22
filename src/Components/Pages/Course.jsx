import React, { Fragment } from 'react';

const cursos = [
    {
        "id": 1,
      "title": "Curso de Practica de react",
      "image": "https://prod.media.libero.pe/1200x660/libero/imagen/2020/06/07/noticia-1591544992-escandalosos.jpg",
      "price": "30",
      "profesor": "Julio Diaz"
    } , {
        "id": 2,
      "title": "Curso de Talento de react",
      "image": "https://technocio.com/wp-content/uploads/2019/10/SPA-Halloween-on-CN.jpg",
      "price": "200",
      "profesor": "Julio Diaz"
    } , {
        "id": 3,
      "title": "Curso de Aprendisaje de react",
      "image": "https://i.ytimg.com/vi/0PYY_k1Adto/maxresdefault.jpg",
      "price": "1200",
      "profesor": "Julio Diaz"
    } , {
        "id": 4,
      "title": "Curso de Ejercicio de react",
      "image": "https://almanaquerevista.com/wp-content/uploads/2020/06/ESCANDALOSOS-600x454.jpg",
      "price": "50",
      "profesor": "Julio Diaz"
    } 
  ]


const Course = ({match}) => {

    const cursoActual = cursos.filter(c => c.id === parseInt(match.params.id))[0]

    return(
        <div className="ed-grid m-grid-3">
            {
                cursoActual ? (
                    <Fragment>
                    {/* Curso : {match.params.id} */}
                    <h1 className="m-cols-3">{cursoActual.title}</h1>
                    <img className="m-cols-1" src={cursoActual.image} alt={cursoActual.title}/>
                    <p className="m-cols-2" >Profesor : {cursoActual.profesor}</p>
                    </Fragment>
                ) : 
                    <h1>El Curso No Existe</h1>
            }
        </div>
    )}
 
export default Course;