import React from 'react';
import './styles/shared.css';
import TextInput from './components/shared/TextInput';
import ReactLoader from './components/shared/loader';
import FileSelector from './components/shared/FileSelector';
import { Button } from 'react-bootstrap';

function App() {
    document.title = 'ATS';
  return (
    <>
    <>
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
    </>
      <div className="row">
        <div className="col-lg-6">
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
        <div className="col-lg-6">
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
        <ReactLoader loading="false"/>
        <div className="col-lg-6">
          <FileSelector
            id="file-selector"
            label="Select : "
            labelclassName=""
            name="fileSelector"
            value=""
            onChange={(e) => console.log("On Change --->", e.target.files[0])}
            isRequired="true"
            error="Please select a valid file"
          />
        </div>
      </div>
    </>
  );
}

export default App;
