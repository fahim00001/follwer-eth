import React from 'react';
import './Course.css'
const Course = (props) => {
    const {course,handleAddToCart} =props;
    const {name,price,picture,info}=course;
    // console.log(props);
    return (
     <div className='course-card'>
            <div className="card" style={{"width": "18rem"}}>
            <img src={".."} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title fw-bolder">{name}</h5>
            <p className="card-text fw-bold"> Price:{price}</p>
            <p className="card-text">{info}</p>
            <p onClick={() =>{handleAddToCart(course)}}><button className="custom-btn-course">Add to cart</button></p>
        </div>
    </div>
        </div>
    );
};

export default Course;