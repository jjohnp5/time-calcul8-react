import React from "react";
import {connect} from 'react-redux';
import moment from 'moment'
import {Table} from 'reactstrap'
import AddMile from './AddMile'

class Timesheet extends React.Component {
    

    render(){
        console.log(this.props)
        return(
            <React.Fragment>
                <h2 className="timesheet-head">{this.props.user.firstName} {this.props.user.lastName}'s Timecard</h2>
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
                {this.props.timesheet.map(u=>{
                    const date = moment(u.addedDate)
                    return (
                        <tr key={u._id}>
                       
                                <th scope="row">{date.format('YYYY-MMM-DD')}</th>
                                {u.punch.map((p,i,a)=>{
                                    const pun = moment(p.addedDate)
                                    if(a.length < 2){
                                        return(
                                        <React.Fragment>
                                        <td>{pun.format('LT')}</td>
                                        <td></td>
                                        </React.Fragment>)
                                    }
                                    return (
                                     
                                    <td>{pun.format('LT')}</td>
                                )})}
                                <td>
                                    <AddMile 
                                        milesTraveled={u.milesTraveled}
                                        timesheetId={u._id}
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


export default connect(store=>({timesheet: store.userTimesheets, user: store.authUser}))(Timesheet)