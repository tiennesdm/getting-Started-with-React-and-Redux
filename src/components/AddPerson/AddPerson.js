import React, { Component } from 'react';

import classes from'./AddPerson.css';
import MyButton from './../UI/Button/Button';

class AddPerson extends Component {
    state = {
        name: '',
        age: ''
    }

    nameChangedHandler = (event) => {
        this.setState({name: event.target.value});
    }

    ageChangedHandler = (event) => {
        this.setState({age: event.target.value});
    }

    render () {
        return (
            <div className={classes.AddPerson}>
                <input 
                    type="text" 
                    placeholder="Name" 
                    onChange={this.nameChangedHandler}
                    value={this.state.name} />
                <input 
                    type="number" 
                    placeholder="Age"
                    onChange={this.ageChangedHandler}
                    value={this.state.age} />
                     <MyButton btnType="Success" clicked={() => this.props.personAdded(this.state.name, this.state.age)}>ADD PERSON</MyButton>
                {/* <button onClick={() => this.props.personAdded(this.state.name, this.state.age)}>Add Person</button> */}

            </div>
        );
    }
}

export default AddPerson;