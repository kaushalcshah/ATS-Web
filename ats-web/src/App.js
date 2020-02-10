import React,{useState,useEffect} from 'react';
import './styles/shared.css';
import TextInput from './components/shared/TextInput';
import TestComponent from './TestComponent'
import Tabs from './components/shared/Tabs';


function App() {
const [TabList,setTabList] = useState([]);
useEffect (()=>{
  let tab_list = [];
  tab_list.push({"title":"Candidate Details","URL":<TestComponent tabDetails="CandidateDetails"/>,"isActive":true});
  tab_list.push({"title":"Feedback","URL":<TestComponent tabDetails="Feedback"/>,"isActive":false});
  setTabList(tab_list)
},[]);

return (
    <>
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
      </div>
      <div className="row">
      <Tabs tabList={TabList} />
      </div>
    </>
  );
}

export default App;
