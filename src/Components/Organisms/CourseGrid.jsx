import React, { Fragment } from 'react'
import CourseCard from '../Molecules/CourseCard'


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

  
const CourseGrid = () => {
    return ( 
        <Fragment>
            <div className="ed-grid m-grid-4">
                { cursos.map(c => ( 
                <CourseCard
                key={c.id}
                id={c.id}
                title={c.title}
                image={c.image}
                price={c.price}
                profesor={c.profesor}
                />
                ))}
            </div>
        </Fragment>
     );
}
 
export default CourseGrid;