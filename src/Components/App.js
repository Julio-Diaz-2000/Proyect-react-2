import React, { Fragment } from 'react';
import './Styles/styles.scss';
import CourseCard from './Molecules/CourseCard'
import Banner from './Organisms/Banner'

const cursos = [
  {
    "title": "Curso de Practica de react",
    "image": "https://prod.media.libero.pe/1200x660/libero/imagen/2020/06/07/noticia-1591544992-escandalosos.jpg",
    "price": "30"
  } , {
    "title": "Curso de Talento de react",
    "image": "https://technocio.com/wp-content/uploads/2019/10/SPA-Halloween-on-CN.jpg",
    "price": "200"
  } , {
    "title": "Curso de Aprendisaje de react",
    "image": "https://i.ytimg.com/vi/0PYY_k1Adto/maxresdefault.jpg",
    "price": "1200"
  } , {
    "title": "Curso de Ejercicio de react",
    "image": "https://almanaquerevista.com/wp-content/uploads/2020/06/ESCANDALOSOS-600x454.jpg",
    "price": "50"
  } 
]

const App = () => {
  return ( 
    <Fragment>
     
     <Banner></Banner>

      <div className="ed-grid m-grid-3">

          {/*Primera forma de llamar a tu componente */}
            {/*<CourseCard />*/}
          {/*-------------------------------------------- */}


          {/*segunda forma de llamar a tu componente */}
           {/* <CourseCard 
              title="Aprendiendo react"
              image="https://ux.ed.team/img/curso-portada.png"
              price="20USD"
            />

            <CourseCard 
              title="segunda clase de React"
              image="https://ed.team/static/images/utils/og-image.jpg"
              price="120USD"
            / >
             <CourseCard 
              title="Aprendiendo react"
              image="https://ux.ed.team/img/curso-portada.png"
              price="20USD"
            />

            <CourseCard 
              title="segunda clase de React"
              image="https://ed.team/static/images/utils/og-image.jpg"
              price="120USD"
            />

            <CourseCard 
              title="Aprendiendo react"
              image="https://ux.ed.team/img/curso-portada.png"
              price="20USD"
            />

            <CourseCard
            /> */}
            {/*-------------------------------------------- */}


            {/*tercera forma de llamar a tu componente */}

            {
              cursos.map( c => <CourseCard title={c.title} image={c.image} price={c.price}></CourseCard> )
            }


      </div>
    </Fragment>
   );
}
 
export default App;


