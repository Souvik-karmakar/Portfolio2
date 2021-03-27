import React, { Component } from 'react';
import './Footertop.scss';
class Footertop extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="footertop">
                <div className="container">
                <div className="two">Enter Email & Name</div>
                <input type="Email" placeholder=" xyz@gmail.com" />
                <div>
                <input type="Text" placeholder=" Type your name" />
                </div>
                <button>Submit</button>
                </div>
            </div>
         );
    }
}
 
export default Footertop;