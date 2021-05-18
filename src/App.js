import React from "react";
import Heading from './Heading';
import Jumpstart from './Jumpstart'; 
import Port from './Port';
import Reasons from './Reasons';
import Blueban from './Blueban';
import Links from './Links';
import Sbanner from './Sbanner';
import Myfoot from './Myfoot';
import Options from './Options';


function App() {
  return (
    <div>
      <Heading />
      <Jumpstart />
      <Options/>
      <Port />
      <Reasons />
      <Blueban />
      <Links />
      <Sbanner />
      <Myfoot />
    </div>
    
  );
}

export default App;
