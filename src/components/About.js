import React from 'react';
import {useNavigate} from 'react-router-dom';






const About = () => {

const navigate = useNavigate();

const handleClick = () => {
    navigate('/')
}



    return (
        <div>
           <h1>About</h1> 
           <button onClick={handleClick}>
               Logout
            </button>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, quibusdam unde. Velit sed sapiente tempora aperiam, laudantium nisi illo tenetur.</p>
        </div>
    );
}

export default About;
