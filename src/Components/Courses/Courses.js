import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Course from '../course/Course';
import './Courses.css'

const Courses = () => {
    const [courses,setCourses] = useState([]);
    const [cart, setCart] =useState([]);

    const handleAddToCart =(course)=>{
        const addCourse =[...cart,course]
        setCart(addCourse) 
    }
    useEffect(()=>{
        fetch('coursesdb.json')
        .then(res =>res.json())
        .then(data => setCourses(data))
    })

    return (
        <div className='container'>
            <div className='row'>
            <div className="course-container col-lg-10">
                <div className='row row-cols-1 row-cols-lg-3 g-4'>
                        {
                            courses.map(course => <Course
                            key={course.key}
                            course={course}
                            handleAddToCart={handleAddToCart}
                            >
                            </Course>)
                        }
                </div>
            </div>
            <div className="cart-container mt-3 col-12 col-lg-2">
                <Cart
                cart={cart}
                ></Cart>
            </div>
            </div>
        </div>
    );
};

export default Courses;