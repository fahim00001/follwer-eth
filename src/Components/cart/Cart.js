import React from 'react';
import './cart.css'
const Cart = (props) => {
    // console.log(props);
    const {cart}=props;
    const {name,price}=cart
    return (
        <div className='cart'>
            <h4>Cart Details</h4>
            <p className='fw-bolder'>Course name:</p> 
            <ol>
                {
                    cart.map(course => <li><p>{course.name}</p></li>)
                }
            </ol>
            <p>Price:</p>
            <button  className='mt-3 custom-button custom-btn' >Recommed teacher</button><br />
            <button className='mt-3 btn btn-danger  rounded-pill' >Reset Cart</button>
        </div>
    );
};

export default Cart;