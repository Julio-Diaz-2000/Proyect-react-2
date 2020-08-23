import React, { Fragment } from 'react';
import CourseCard from '../Molecules/CourseCard';
import WithLoader from '../HOC/WithLoader';

const CourseGrid = ({courses}) => {
    return ( 
        <Fragment>
             <div className="ed-grid m-grid-4">
              {
              courses.map(c => ( 
                <CourseCard
                key={c.id}
                id={c.id}
                title={c.title}
                image={c.image}
                price={c.price}
                profesor={c.profesor}
                />
                )) }
          </div>
        </Fragment>
     );
}
 
export default WithLoader("courses")(CourseGrid) 