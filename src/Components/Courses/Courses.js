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
    const randomCart = () =>{
        
         if(cart.length <= 3 ){
            return window.alert('please choose 4 Course for recomendation')
        }
        else if(cart.length > 4){
                return window.alert("You can't choose more than 4 course for recomendation")
        }
       else {
            const randomNum = cart[Math.floor(Math.random() * cart.length)];
            let newCart = [];
            newCart = [randomNum];
           setCart(newCart); 
        }
    }

    useEffect(()=>{
        fetch('coursesdb.json')
        .then(res =>res.json())
        .then(data => setCourses(data))
    })

    return (
        <div className='container'>
            <div className='row gx-5'>
            <div className="course-container col-lg-9">
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
            <div className="cart-container mt-3 col-lg-2">
                <Cart
                cart={cart}
                randomCart = {randomCart}
                ></Cart>
            </div>
            </div>
        </div>
    );
};

export default Courses;