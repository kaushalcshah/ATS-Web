import React from 'react';
import './styles/shared.css';
import TextInput from './components/shared/TextInput';
import ReactLoader from './components/shared/loader';
import FileSelector from './components/shared/FileSelector';
import NavBar from './components/shared/NavBar'
import InputSpinner from './components/shared/InputSpinner';
function App() {
  document.title = 'ATS';
  return (
    <>
    <NavBar/>
      <div className="row">
	  
        <div className="col-lg-6">
      <div className="ant-row">
        <div className="ant-col-12">
          <TextInput
            id="first-name"
            label="First Name"
            labelclassName=""
            name="firstName"
            value=""
            onChange={(e) => console.log(e.target.value)}
            isRequired={false}
          />
        </div>
        </div>
        <div className="ant-row">
        <div className="ant-col-24">
          <TextInput
            id="email"
            label="Email"
            labelclassName=""
            name="email"
            value=""
            onChange={(e) => console.log(e.target.value)}
            isRequired={true}
            errorMsg="Please enter valid email"
            labelWrapperClass="ant-col ant-form-item-label ant-col-xs-24 ant-col-sm-5"
            fieldContainerClass="ant-col ant-form-item-control-wrapper ant-col-xs-24 ant-col-sm-12"
          />
        </div>
        
      </div>
      <div className="ant-row">
      <ReactLoader loading="false" />
        <div className="ant-col-6">
          <FileSelector
            id="file-selector"
            label="Select : "
            labelclassName=""
            name="fileSelector"
            value=""
            onChange={(e) => console.log("On Change --->", e.target.files[0])}
            isRequired={true}
            errorMsg="Please select a file"
            acceptFilesOfType="*.*"
          />
        </div>
      </div>
      
      <div className="ant-row">
        <div className="ant-col-6">
          <InputSpinner
            id="spinner1"
            name="inputSpinner"
            min={0}
            max={20}
            isRequired={true}
            label="Left Input Spinner"
            errorMsg="Please select valid experience years"
            onChange={(e) => console.log("On Change --->", e)}
          />
        </div>
        <div className="ant-col-6">
          <InputSpinner
            id="spinner2"
            name="input1Spinner"
            min={0}
            max={15}
            isRequired={true}
            label="Right Input Spinner"
            errorMsg="Please select valid experience years"
            onChange={(e) => console.log("On Change --->", e)}
          />
        </div>
      </div>
    </>
  );
}

export default App;
