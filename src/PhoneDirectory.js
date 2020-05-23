import React, { Component } from 'react';
import AddSuscriber from './AddSuscriber';
import ShowSuscriber from './ShowSuscriber';

class PhoneDirectory extends Component {
    constructor(){
        super();
        this.state = {
            subscriberList: []
        }
    }

    addSuscriberHandler = (newSuscriber) =>{
        let subscribersList = this.state.subscriberList;
        if(subscribersList.length > 0){
            newSuscriber.id = subscribersList[subscribersList.length - 1].id  + 1;
        }else{
            newSuscriber.id = 1;
        }
        subscribersList.push(newSuscriber)
        this.setState({subscriberList: subscribersList})
        console.log(this.state.subscriberList)
    }
    render() {
        return (
            <div>
                {/* <AddSuscriber addSuscriberHandler = {this.addSuscriberHandler}/> */}
                <ShowSuscriber subscriberList = {this.state.subscriberList}/>
            </div>
        );
    }
}

export default PhoneDirectory;