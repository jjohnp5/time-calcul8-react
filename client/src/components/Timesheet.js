import React from "react";
import {connect} from 'react-redux';
import moment from 'moment'
import {Table} from 'reactstrap'

class Timesheet extends React.Component {
    

    render(){
        console.log(this.props)
        return(
            <Table>
            <thead>
                <tr>
                <th>Date</th>
                <th>In</th>
                <th>Out</th>
                </tr>
            </thead>
            <tbody>
                {this.props.user.map(u=>{
                    const date = moment(u.addedDate)
                    return (
                        <tr>
                       
                                <td>{date.format('hA')}</td>
                                {u.punch.map(p=>{
                                    const pun = moment(p.addedDate)
                                    return (
                                     
                                    <td>{pun.format('hA')}</td>
                                )})}
                                
                            </tr>
                    )
                })
            }
                </tbody>
                        </Table>

        )
    }



}


export default connect(store=>({user: store.userTimesheets}))(Timesheet)