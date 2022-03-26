import React, { useEffect, useState } from 'react';

const Courses = () => {
    const [courses,setCourses] = useState([]);


    useEffect(()=>{
        fetch('coursesdb.json')
        .then(res =>res.json())
        .then(data => setCourses(data))
    })

    return (
        <div className='container'>
            <div className='row'>
            <div className="course-container col-lg-10">
                <div className='row'>
                        {
                            courses.map(course=> console.log(course))
                        }
                </div>
            </div>
            <div className="cart-container col-lg-2">
                This is cart area
            </div>
            </div>
        </div>
    );
};

export default Courses;