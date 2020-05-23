import React, { Component } from 'react';
import Header from './Header';
import './AddSuscriber.css'
import {Link} from 'react-router-dom'

class AddSuscriber extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: '',
            phone: ''
        }
    }

    inputChangedHandler = e => {
        const state = this.state
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    onFormSubmitted = (e)=>{
        e.preventDefault()
        this.props.addSuscriberHandler(this.state)
        this.setState({id: 0  , name : '' , phone : ''})
        this.props.history.push('/')
    }

    render() {
        const { name, phone } = this.state
        return (
            <div>
                <Header header="Add Suscriber" />
                <div className="component-body-container">
                    <Link to="/"><button className="custom-btn">BACK</button></Link>
                    <form className="subscriber-form" onSubmit = {this.onFormSubmitted.bind(this)}>
                        <label htmlFor="name" className="label-control">Name</label><br />
                        <input type="text" id="name" className="input-control" name="name" onChange={this.inputChangedHandler}></input><br /><br />
                        <label htmlFor="phone" className="label-control">Phone</label><br />
                        <input type="text" id="phone" className="input-control" name="phone" onChange={this.inputChangedHandler}></input><br />
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to add heading: </span><br />
                            <span className="subscriber-info">Name: {name}</span><br />
                            <span className="subscriber-info">Phone: {phone}</span><br />
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSuscriber;