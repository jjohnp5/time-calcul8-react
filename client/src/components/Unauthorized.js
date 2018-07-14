import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

class Unauthorized extends Component {

    render(){
        return (
            <React.Fragment>
            <h2 className="text-center">Unauthorized request.</h2>
            <p className="text-center">Click <Link to="/" className="link-basic">here</Link> to go back to home page</p>
            </React.Fragment>
        )
    }
}

export default connect()(Unauthorized)