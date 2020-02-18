import React,{useEffect} from 'react';
import './styles/shared.css';
import TextInput from './components/shared/TextInput';


function App(props) {
  let numberOfRows = [];
  for(let i=0;i<props.numberOfRows;i++){
    numberOfRows.push(i);
  } 
  

return (
    <>
     {numberOfRows.map((index) =>
     <div className="ant-row">
     <div className="ant-col-12">
        <TextInput
        id={index}
        label={props.tabDetails +"_" + index}
        labelclassName=""
        name={index}
        value=""
        onChange={(e) => console.log(e.target.value)}
        isRequired={true}
        labelWrapperClass="ant-col ant-form-item-label ant-col-xs-12 ant-col-sm-6"
        fieldContainerClass="ant-col ant-form-item-control-wrapper ant-col-xs-12 ant-col-sm-14"
      />
      </div>
      <div className="ant-col-12">
       <TextInput
        id={index}
        label={props.tabDetails + index}
        labelclassName=""
        name={index}
        value=""
        onChange={(e) => console.log(e.target.value)}
        isRequired={true}
        labelWrapperClass="ant-col ant-form-item-label ant-col-xs-12 ant-col-sm-6"
        fieldContainerClass="ant-col ant-form-item-control-wrapper ant-col-xs-12 ant-col-sm-14"
      />
      </div>
      </div>
    )}
    </>
  );
}

export default App;
