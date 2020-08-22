import React from 'react'
import { Fragment } from 'react';

const Banner = () => {
    return ( 
        <Fragment>
        <div className="main-banner img-container l-section" id="main-banner">
        <div className="ed-grid lg-grid-6">
          <div className="lg-cols-4 lg-x-2">
            <img className="main-banner__img" src="https://img.zonared.com/images/noticias/44100/44117/1.jpg" alt="Imagen del curso"/>
            <div className="main-banner__data s-center">
              <p className="t2 s-mb-0">Título del banner</p>
              <p> Subtítulo del banner</p>
              <a href="https://translate.google.com/?hl=es#view=home&op=translate&sl=en&tl=es&text=Line%2010%3A13%3A%20%20img%20elements%20must%20have%20an%20alt%20prop%2C%20either%20with%20meaningful%20text%2C%20or%20an%20empty%20string%20for%20decorative%20images%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20jsx-a11y%2Falt-text%0A%20%20Line%2014%3A15%3A%20%20The%20href%20attribute%20requires%20a%20valid%20value%20to%20be%20accessible.%20Provide%20a%20valid%2C%20navigable%20address%20as%20the%20href%20value.%20If%20you%20cannot%20provide%20a%20valid%20href%2C%20but%20still%20need%20the%20element%20to%20resemble%20a%20link%2C%20use%20a%20button%20and%20change%20it%20with%20appropriate%20styles.%20Learn%20more%3A%20https%3A%2F%2Fgithub.com%2Fevcohen%2Feslint-plugin-jsx-a11y%2Fblob%2Fmaster%2Fdocs%2Frules%2Fanchor-is-valid.md%20%20jsx-a11y%2Fanchor-is-valid" className="button">Botón del banner</a>
            </div>
          </div>
        </div>
      </div>
      </Fragment>
     );
}
 
export default Banner;