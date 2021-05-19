import React from "react";
import Heading from './components/Heading';
import Jumpstart from './components/Jumpstart'; 
import Port from './components/Port';
import Reasons from './components/Reasons';
import Blueban from './components/Blueban';
import Links from './components/Links';
import Sbanner from './components/Sbanner';
import Myfoot from './components/Myfoot';
import Options from './components/Options';
import Table from "./components/Table";


function App() {
  return (
    <div>
      <Heading />
      <Jumpstart />
       <Table />
      <Options />
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
