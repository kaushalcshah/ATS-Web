import React,{useState,useEffect} from 'react';
import './styles/shared.css';
import TextInput from './components/shared/TextInput';
import Tabs from './components/shared/Tabs';


function App(props) {
return (
    <>{
      props.tabDetails === "CandidateDetails" ? 
      <div className="row">
        <div className="col-lg-4">
          <TextInput
            id="first-name"
            label="First Name"
            labelclassName=""
            name="firstName"
            value=""
            onChange={(e) => console.log(e.target.value)}
            isRequired="true"
          />
        </div>
        <div className="col-lg-4">
          <TextInput
            id="email"
            label="Email"
            labelclassName=""
            name="email"
            value=""
            onChange={(e) => console.log(e.target.value)}
            isRequired="true"
            error="Please enter valid email"
          />
        </div>
      </div>
      : <div className="row">
      <div className="col-lg-4">
      <TextInput
            id="feedback"
            label="Feedback"
            labelclassName=""
            name="feedback"
            value=""
            onChange={(e) => console.log(e.target.value)}
          />
      </div>

      </div>}
    </>
  );
}

export default App;
