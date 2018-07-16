import React, { Component} from 'react';
import {connect} from 'react-redux'
import {Button, Input, FormGroup} from 'reactstrap';
import {updateTimesheet} from '../util/timeSheet'
import {handleUpdateSheet} from '../actions/viewSheet'


class AddMile extends Component {
    state = {
        addingMile: false,
        milesTraveled: this.props.milesTraveled
    }
    updateAddingMile = () => {
        this.setState({
        addingMile: !this.state.addingMile,
        milesTraveled: this.props.milesTraveled
        })
    }

    handleInputChange = (e) => {
        const {name, value} = e.target;
        this.setState(()=>{ 
            return {
                [name] : value
            }
        }
    )
    }
    handleAddMile = (e) => {
        
        e.preventDefault();
        updateTimesheet(this.props.timesheetId, {milesTraveled: this.state.milesTraveled})
            .then(d=>{
                this.props.dispatch(handleUpdateSheet({id: this.props.ind, milesTraveled: this.state.milesTraveled}))
                this.setState({addingMile: !this.state.addingMile})
            }
            )
            
    }
    render(){
        return (
            <div>
                {this.state.addingMile ? 
                <React.Fragment>
                    <FormGroup>
                    <Input type='number' name="milesTraveled" 
                        value={this.state.milesTraveled}
                        onChange={this.handleInputChange} autoFocus={true} />
                    
                    </FormGroup>
                    <Button color="success" onClick={this.handleAddMile}>Update Miles</Button>
                    </React.Fragment>
                    :
                    <Input onClick={this.updateAddingMile} placeholder={this.state.milesTraveled}    />
            }
                
            </div>
        )

    }

    
}

export default connect()(AddMile);