import React, { Component } from 'react';
import AddSuscriber from './AddSuscriber';
import ShowSuscriber from './ShowSuscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: []
        }
    }

    addSuscriberHandler = (newSuscriber) => {
        let subscribersList = this.state.subscriberList;
        if (subscribersList.length > 0) {
            newSuscriber.id = subscribersList[subscribersList.length - 1].id + 1;
        } else {
            newSuscriber.id = 1;
        }
        subscribersList.push(newSuscriber)
        this.setState({ subscriberList: subscribersList })
        console.log(this.state.subscriberList)
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/' render={(props) => <ShowSuscriber {...props} subscriberList={this.state.subscriberList} />} />
                        <Route exact path='/add' render={({history},props) => <AddSuscriber history = {history} {...props} addSuscriberHandler={this.addSuscriberHandler} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneDirectory;

