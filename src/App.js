import React from 'react';
import * as Component from './Components';


function App() {

  return (
    <div className="text-red-700 m-6">
      {/* Ability This Component  Avatar Group can change value maxlenght below*/}
      <Component.AvatarGroup maxLength={1}/>
    </div>
  );
}

export default App;
