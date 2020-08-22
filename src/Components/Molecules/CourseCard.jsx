import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
{/*1------------------------------------------------------------------------ */}
{/*Una forma basica de crear un objeto y reutilisar este componente */}
{/*const CourseCard = () => {
    
  const ConsultarEdad = edad => edad > 19
  const persona={Nombre:'Julio', Apellido: 'Diaz', Edad:20}

  return ( 
 <Fragment>

        <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://ux.ed.team/img/curso-portada.png" alt="" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
       {persona.Nombre }<br></br>
       {`${persona.Apellido}` }<br></br>
       {ConsultarEdad(persona.edad)? "soy mayor de edad": "soy menor"} <br></br>
       {ConsultarEdad(persona.edad)? 
       <p>{persona.Edad}</p> : <p>{persona.Edad}</p>
       }
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="path/img" alt="" />
            </div>
          </div>
          <span className="small">Alexys Lozada</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
      </div>
    </div>
  </article>
  </Fragment>
     );
}*/}
{/*1------------------------------------------------------------------------ */}

{/*2------------------------------------------------------------------------ */}
{/*Una forma de utilisar el mismo componente y editar el contenido desde el lugar donde lo llamas con el (props) */}
{/*const CourseCard = props => (
    <Fragment>
      <article className="card">
        <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
          <img src={props.image} alt={props.title} />
        </div>
        <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
            <h3 className="t5 s-mb-2 s-center">{props.title}</h3>
            <div className="s-main-center">
              <a className="button--ghost-alert button--tiny" href="#">{`$ ${props.price}`}</a>
            </div>
        </div>
      </article>
    </Fragment>
)*/}
{/*2------------------------------------------------------------------------ */}

{/*3------------------------------------------------------------------------ */}
{/*Una forma de utilisar el mismo componente y editar el conetnido y lo llamas desde el mismo componente y facil de editable */}
{/*const CourseCard = ({title,image,price}) => (
  <Fragment>
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {
          image 
          ?
          <img src={image} alt={title} />
          :<img src="https://i.pinimg.com/originals/16/e0/3b/16e03bd0765508c1bb5bc9f36922de11.jpg" />
        }
       
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">{title ? title: 'No hay Title y la Img es por Defecto'}</h3>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
          </div>
      </div>
    </article>
  </Fragment>
)*/}
 {/*3------------------------------------------------------------------------ */}

 {/*4------------------------------------------------------------------------ */}
{/*Usamos una forma de editar con el (npm add prop-types) para la edicion del contenido*/}
const CourseCard = ({id,title,image,price,profesor}) => (
  <Fragment>
    <article className="card">
      <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
        {/*lo importante en react es no recargar la pagina 
        entonces con (link) hace lo mismo que la etiqueta (a) solo que con link no recarga la pagina
        y solo cambia el (http) por (to) */}
        <Link to={`/Cursos/${id}`}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
          <h3 className="t5 s-mb-2 s-center">{title}</h3>
            <h4 className="t5 s-mb-2 s-center">{profesor}</h4>
          <div className="s-main-center">
            <a className="button--ghost-alert button--tiny" href="#">{`$ ${price}`}</a>
          </div>
      </div>
    </article>
  </Fragment>
)

CourseCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  price: PropTypes.string,
  profesor: PropTypes.string
}

CourseCard.defaultProps = {
  title: "No se encontro Titulo",
  image: "https://i.pinimg.com/originals/16/e0/3b/16e03bd0765508c1bb5bc9f36922de11.jpg",
  price: "--",
  profesor: " "
}
{/*4------------------------------------------------------------------------ */}

export default CourseCard;
 
