import React from "react";
import {Link} from 'react-router-dom'
import {connect} from 'react-redux';
import moment from 'moment'
import {Table, Button} from 'reactstrap'
import AddMile from './AddMile'
import UpdatePunch from './UpdatePunch'

import Nav from './Nav'

class ManagerTimesheet extends React.Component {
    

    render(){
        return(
            <React.Fragment>
                <Nav />
               
                <h2 className="timesheet-head">{this.props.user.firstName} {this.props.user.lastName}'s Timecard</h2>
                {
                    this.props.user.position >= 2 ? 
                        (<Link to="/manager/home"><Button color="primary">Back</Button></Link>)
                        :
                        null

                    
                }
            <Table striped>
            <thead>
                <tr>
                <th>Date</th>
                <th>In</th>
                <th>Out</th>
                <th>Miles</th>
                </tr>
            </thead>
            <tbody>
                {this.props.timesheet.map((u,ind)=>{
                    const date = moment(u.addedDate)
                    return (
                        <tr key={u._id}>
                       
                                <th scope="row">{date.format('YYYY-MMM-DD')}</th>
                                {u.punch.map((p,i,a)=>{
                                    const pun = moment(p.addedDate)
                                    console.log(moment(pun.format('YYYY-MM-DD')).format())
                                    if(a.length < 2){
                                        return(
                                        <React.Fragment>
                                        <td><UpdatePunch punch={p} timesheetId={u._id} updatePunch={true}/></td>
                                        <td><UpdatePunch updatePunch={false} newPunch={p} timesheetId={u._id}/></td>
                                        </React.Fragment>)
                                    }
                                    return (
                                     
                                    <td><UpdatePunch punch={p} timesheetId={u._id} updatePunch={true}/></td>
                                )})}
                                <td>
                                    <AddMile 
                                        milesTraveled={u.milesTraveled}
                                        timesheetId={u._id}
                                        history={this.props.history}
                                        ind={ind}
                                     />
                                </td>
                            </tr>
                    )
                })
            }
                </tbody>
                        </Table>
                        </React.Fragment>

        )
    }



}


export default connect(store=>({timesheet: store.viewSheet, user: store.authUser}))(ManagerTimesheet)