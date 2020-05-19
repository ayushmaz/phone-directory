import React from 'react';
import Header from './Header'
import './App.css'

function App() {
  let subscribers = [
    {
      id: 1,
      name: "Ayush",
      phone: "0000000000"
    },
    {
      id: 2,
      name: "Niharika",
      phone: "8888888888"
    }
  ];
  return (
    <div >
      <Header header= " Phone Directory"/>
      <div className="component-body-container">
        <button className="custom-btn add-btn">Add</button>

        <div className="grid-container heading-container">
          <span className="grid-item name-heading">Name</span>
          <span className="grid-item phone-heading">Phone</span>
        </div>

        {subscribers.map(sub => {
          return <div key={sub.id} className="grid-container">
            <span className="grid-item ">{sub.name}</span>
            <span className="grid-item ">{sub.phone}</span>
            <span className="grid-item">
              <button className="custom-btn delete-btn">Delete</button>
            </span>
          </div>
        })}


      </div>
    </div>
  );
}

export default App;
