import React from 'react';
import './Question.css'
const Question = () => {
    return (
        <div className='container mt-5'>
            <div className='question-container'>
                <h3>Diffrence between props and state?</h3>
                <p>
                props vs state diffrence:
                 props ==)
                    <ol>
                        <li>props are read-only and immutable.</li>
                        <li>props are external and controlled by whatever renders the component.</li>
                        <li>stateless component can have props also props make components reusable</li>
                        <li>we can't change props inside the components</li>
                        <li>props can be changed by parent Component</li>
                    </ol>
                </p>
                <p>
                 state ==)              
                    <ol>
                        <li>State changes can be asynchronous and it is mutable.</li>
                        <li>States can be used for rendering dynamic changes with the component.</li>
                        <li>It also helps virtual dom to compare change and then virtual dom don't have to change whole dom. </li>
                        <li>state holds information about the components.</li>
                        <li>State can't change in the  child Components </li>
                    </ol>
                </p>
            </div>
            <div></div>
        </div>
    );
};

export default Question;