import React, { Component } from 'react';
import AddSuscriber from './AddSuscriber';
import ShowSuscriber from './ShowSuscriber';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import EditSuscriber from './EditSuscriber';

class PhoneDirectory extends Component {
    constructor() {
        super();
        this.state = {
            subscriberList: [],
            editInfo: ''
        }
    }

    deleteSuscriberHandler = (id) => {
        let subscribersList = this.state.subscriberList
        let subscriberIndex = 0
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id == id) {
                subscriberIndex = index
            }
        }, this)

        subscribersList.splice(subscriberIndex, 1)
        this.setState({ subscriberList: subscribersList })
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

    updateSubscriberList = (id,name,phone) => {
        let subscribersList = this.state.subscriberList
        let subscriberIndex = 0
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id == id) {
                console.log('name:', name)
                subscriber.name = name;
                subscriber.phone = phone
                console.log("After:",subscriber)
            }
        }, this)
        this.setState({ subscriberList: subscribersList })
    }

    editSubscriberHandler = id => {
        const info = {}
        let subscribersList = this.state.subscriberList
        subscribersList.forEach(function (subscriber, index) {
            if (subscriber.id == id) {
                info['id'] = id;
                info['name'] = subscriber.name;
                info['phone'] = subscriber.phone
            }
        }, this)
        this.setState({ editInfo: info })
    }
    render() {
        return (
            <div>
                <Router>
                    <div className="main-container">
                        <Route exact path='/phone-directory' render={(props) => <ShowSuscriber {...props}
                            subscriberList={this.state.subscriberList}
                            deleteSuscriberHandler={this.deleteSuscriberHandler}
                            editSubscriberHandler={this.editSubscriberHandler}
                        />}

                        />
                        <Route exact path='/add' render={({ history }, props) => <AddSuscriber history={history} {...props} addSuscriberHandler={this.addSuscriberHandler} />} />
                        <Route exact path='/edit' render={({ history }, props) => <EditSuscriber history={history} {...props} updateSubscriberList={this.updateSubscriberList} editID={this.state.editInfo} />} />
                    </div>
                </Router>
            </div>
        );
    }
}

export default PhoneDirectory;

