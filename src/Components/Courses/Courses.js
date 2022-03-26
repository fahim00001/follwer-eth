import React, { useEffect, useState } from 'react';
import Course from '../course/Course';

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
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                        {
                            courses.map(course => <Course
                            key={course.key}
                            course={course}
                            >
                            </Course>)
                        }
                </div>
            </div>
            <div className="cart-container mt-3  col-lg-2">
                This is cart area
            </div>
            </div>
        </div>
    );
};

export default Courses;