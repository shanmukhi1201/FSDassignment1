// import neccessary dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import image from './images/lizard image.jpg'

//create the component
function Lizard(){
    return (
        <div className="container">
        <div className="items">
         <img src={image} />
        <h1>Lizard</h1>
        <p>Lizards are widespread group of squamate reptiles, 
            with over 6,000 species, ranging across all continents except Antartica</p>
        <a href="">Share</a>&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="">Learn More</a>
        </div>
        </div>
    );
}
//show it to the user
ReactDOM.render(
    <Lizard/>,
    document.getElementById('root')
);