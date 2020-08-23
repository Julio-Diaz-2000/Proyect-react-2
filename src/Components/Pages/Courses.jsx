import React, {  Component } from 'react'
import Axios from 'axios'
import CourseGrid from '../Organisms/CourseGrid'


// const cursos = [
//     {
//         "id": 1,
//       "title": "Curso de Practica de react",
//       "image": "https://prod.media.libero.pe/1200x660/libero/imagen/2020/06/07/noticia-1591544992-escandalosos.jpg",
//       "price": "30",
//       "profesor": "Julio Diaz"
//     } , {
//         "id": 2,
//       "title": "Curso de Talento de react",
//       "image": "https://technocio.com/wp-content/uploads/2019/10/SPA-Halloween-on-CN.jpg",
//       "price": "200",
//       "profesor": "Julio Diaz"
//     } , {
//         "id": 3,
//       "title": "Curso de Aprendisaje de react",
//       "image": "https://i.ytimg.com/vi/0PYY_k1Adto/maxresdefault.jpg",
//       "price": "1200",
//       "profesor": "Julio Diaz"
//     } , {
//         "id": 4,
//       "title": "Curso de Ejercicio de react",
//       "image": "https://almanaquerevista.com/wp-content/uploads/2020/06/ESCANDALOSOS-600x454.jpg",
//       "price": "50",
//       "profesor": "Julio Diaz"
//     } 
//   ]

  
// const Courses = () => {
//     return ( 
//         <Fragment>
//             <div className="ed-grid m-grid-4">
//                 { cursos.map(c => ( 
//                 <CourseCard
//                 key={c.id}
//                 id={c.id}
//                 title={c.title}
//                 image={c.image}
//                 price={c.price}
//                 profesor={c.profesor}
//                 />
//                 ))}
//             </div>
//         </Fragment>
//      );
// }

class Courses extends Component {

  constructor(props) {
    super(props)

    this.state = {
      courses: []
    }
  }

  componentDidMount(){
    Axios.get('https://my-json-server.typicode.com/Julio-Diaz-2000/Api-Json-Demo/cursos')
    .then(resp => 
      this.setState(
        {
          courses: resp.data
        }
      )
    )
  }

  render() {

    const {courses} = this.state

    return <CourseGrid courses={courses}/>
 }
}
 
export default Courses;