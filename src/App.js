import React from 'react';

function App() {
  return (
    <div >
      {/* <div>Phone Directory</div>
      <span>Name</span> <br/>
      <span>Ayush</span>
      <br/>
      <button>Add file</button> */}
      <label htmlFor="name">Name: </label>
      <input type="text" id = "name" defaultValue="Ayush"></input>
    </div>
  );
}

export default App;
