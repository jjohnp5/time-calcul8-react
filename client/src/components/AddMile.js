import React, { Component} from 'react';
import {connect} from 'react-redux'
import {Button, Input, FormGroup} from 'reactstrap';


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
    render(){
        return (
            <div>
                {this.state.addingMile ? 
                <React.Fragment>
                    <FormGroup>
                    <Input type='number' name="milesTraveled" 
                        value={this.state.milesTraveled}
                        onBlur={this.updateAddingMile}
                        onChange={this.handleInputChange} autoFocus={true} />
                    
                    </FormGroup>
                    <Button color="success">Update Miles</Button>
                    </React.Fragment>
                    :
                    <Input onClick={this.updateAddingMile} placeholder={this.state.milesTraveled}    />
            }
                
            </div>
        )

    }

    
}

export default connect()(AddMile);