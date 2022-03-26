import React from 'react';
import './cart.css'
const Cart = (props) => {
    // console.log(props);
    const {cart}=props;
   
    const resetCourse =()=>{
      (cart.length = 0)

    }
    const randomCart = () =>{
        const recomendCourse = [...cart]
        // console.log(recomendCourse);
        const addCart=Math.floor(Math.random() * (recomendCourse[1].name))
        // let rancart = Math.floor(Math.random() * [...cart.length])
        console.log(addCart);
    }
    return (
        <div className='cart'>
            <h4>Cart Details</h4>
             
            {
                <ol>
                {
                    cart.map(course => <li><p className='fw-bold'>
                        {course.name} <br />
                        price:{course.price}</p></li>)
                }
            </ol>
            }
            
            <button onClick={randomCart} className='mt-3 custom-button custom-btn' >Recommed teacher</button><br />
            <button onClick={resetCourse} className='mt-3 btn btn-danger  rounded-pill' >Reset Cart</button>
        </div>
    );
};

export default Cart;