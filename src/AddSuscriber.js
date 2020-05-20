import React, { Component } from 'react';
import Header from './Header';
import './AddSuscriber.css'

class AddSuscriber extends Component{
    render(){
        return(
            <div>
                <Header header="Add Suscriber"/>
                <div className="component-body-container">
                    <button className = "custom-btn">BACK</button>
                    <form className= "subscriber-form">
                        <label htmlFor="name" className="label-control">Name</label><br/>
                        <input type= "text" id="name" className = "input-control"></input><br/><br/>
                        <label htmlFor="phone" className="label-control">Phone</label><br/>
                        <input type= "text" id="phone"className = "input-control"></input><br/>
                        <div className="subscriber-info-container">
                            <span className="subscriber-to-add-heading">Subscriber to add heading: </span><br/>
                            <span className="subscriber-info">Name: </span><br/>
                            <span className="subscriber-info">Phone: </span><br/>
                        </div>
                        <button type="submit" className="custom-btn add-btn">Add</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default AddSuscriber;