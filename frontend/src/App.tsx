// App.js
import React, { useState } from 'react';
import DraggableTextWithDrop from './myd';

const App = () => {
  const [message, setMessage] = useState('Drop outside to see a message!');

  const handleDropOutside = () => {
    setMessage('Text was dropped outside the browser window!');
  };

  return (
    <div>
      <h1>Drag and Drop Outside Example</h1>
      <DraggableTextWithDrop text="Drag me outside!" onDropOutside={handleDropOutside} />
      <p>{message}</p>
    </div>
  );
};

export default App;
