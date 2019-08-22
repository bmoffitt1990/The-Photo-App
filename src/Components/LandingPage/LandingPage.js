import React, {Component} from 'react'
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Page from '../Page/Page'

class LandingPage extends Component{

    render(){
        return(
            <Router>
                <div>
                    <p>Prepare your self for a <i>truly</i> revolutionary platform that is sure to usher in a paradigm shift with how you upload photos to a static web page and have them go <i>ab-so-lutely nowhere.</i> </p><br/><br/>

                    <p> We call it: The Photo App</p><br/><br/>
                    <Link to={'/g/ThePhotoApp'}>
                        <button>ENTER.</button>
                    </Link>
                    <Route exact={true} path="/g/ThePhotoApp" render= {()=> 
                        <Page/>
                    }/>
                </div>
            </Router>
        )
    }
}

export default LandingPage

//add in a picture of gavin belson and have it be brough to you by Hooli XYZ