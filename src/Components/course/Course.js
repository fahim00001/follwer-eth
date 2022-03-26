import React from 'react';

const Course = (props) => {
    const {course} =props;
    const {name,price,picture,info}=course;
    // console.log(props);
    return (
     <div>
            <div className="card" style={{"width": "18rem"}}>
            <img src={".."} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title fw-bolder">{name}</h5>
            <p className="card-text fw-bold"> Price:{price}</p>
            <p className="card-text">{info}</p>
            <a href="\btn btn-primary" className="btn btn-primary w-100">Add to Cart</a>
        </div>
    </div>
        </div>
    );
};

export default Course;