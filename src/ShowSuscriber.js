import Header from './Header'
import './ShowSuscriber.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class ShowSuscriber extends Component {

  onDeletedClick = subscriberID => {
    this.props.deleteSuscriberHandler(subscriberID)
  }

  onEditClicked = subscriberID =>{
    this.props.editSubscriberHandler(subscriberID)
  }

  render() {
    return (

      <div >
        <Header header=" Phone Directory" />
        <div className="component-body-container">
          <Link to="/add"><button className="custom-btn add-btn">Add</button></Link>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>

          {this.props.subscriberList.map(sub => {
            return <div key={sub.id} className="grid-container">
              <span className="grid-item ">{sub.name}</span>
              <span className="grid-item ">{sub.phone}</span>
              <span className="grid-item">
                <button className="custom-btn delete-btn" onClick={this.onDeletedClick.bind(this, (sub.id))}>Delete</button>
                <Link to='/edit'><button onClick={this.onEditClicked.bind(this, (sub.id))} className="custom-btn edit-btn">Edit</button></Link>
              </span>
            </div>
          })}


        </div>
      </div>
    );
  }
}

export default ShowSuscriber;

// function App() {
//   let subscribers = [
//     {
//       id: 1,
//       name: "Ayush",
//       phone: "0000000000"
//     },
//     {
//       id: 2,
//       name: "Niharika",
//       phone: "8888888888"
//     }
//   ];

// }

