import React, {Component} from 'react'
import {Link} from "react-router-dom";


class LandingPage extends Component{

    render(){
        return(
                <div>
                    <p>Prepare your self for a <i>truly</i> revolutionary platform that is sure to usher in a paradigm shift with how you upload photos to a static web page and have them go <i>ab-so-lutely nowhere.</i> </p>
                    
                    <br/><br/>

                    <p> We call it: The Photo App</p><br/><br/>

                    <Link to='/ThePhotoApp'>
                        <button>ENTER.</button>
                    </Link>
                </div>
        )
    }
}

export default LandingPage

//add in a picture of gavin belson and have it be brough to you by Hooli XYZ