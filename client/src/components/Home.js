import React from "react";
import {Link} from 'react-router-dom'
import { connect } from 'react-redux';
import profilepic from "../images/profilepic.png";
import timesheet from "../images/timesheet.png";
import manager from '../images/manager.png'



export default class Home extends React.Component {
    componentDidMount(){
        this.props.history.push('/');
    }


    render() {
        return (
                <div className="row d-flex justify-content-center text-center text-white">
                    <div className="col-12">
                        <div className="row d-flex justify-content-center text-center text-white">

                            <div className="col-12 mt-2 text-white">

                                <Link to="/punch">
                                    <strong> Punch </strong>
                                    <img className="img-responsive center-block mb-5 d-block mx-auto" src={profilepic} width="100" />
                                </Link>


                            </div>
                        </div>
                            <div className="row d-flex justify-content-center text-center text-white">

                                <div className="col-md-4 mt-2 text-white">

                                    <Link to="/employee/login">
                                        <strong> Employee Login</strong>
                                        <img className="img-responsive center-block mb-5 d-block mx-auto" src={timesheet} width="100" />
                                    </Link>


                                </div>

                                    <div className="col-md-4 mt-2 text-lg">

                                        <Link to="/manager/login">
                                            <strong>Manager Login</strong>
                                            <img className="img-responsive center-block mb-5 d-block mx-auto" src={manager} width="100" />
                                        </Link>

                                    </div>
                            </div>
                    </div>


                </div>
                        )
                    }
                
                
                
                }
                
                
