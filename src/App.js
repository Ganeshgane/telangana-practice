import React from "react";
import MaterialUIform from "./Frontpage/MaterialUIform";
import Frontpage from "./Frontpage/Frontpage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from 'react-router-dom';
import Engineeringstudent from "./Registration/Engineeringstudent";
import Degreestudent from "./Registration/Degreestudent";
import Engineeringcollege from "./Registration/Engineeringcollege";
import Degreecollege from "./Registration/Degreecollege";
import Unemployed from "./Registration/Unemployed";
import Employer from "./Registration/Employer";
import Aboutus from "./Loginpage/Aboutus"
import Boardofdirectors from "./Loginpage/Boardofdirectors";
import Dashboard from './Loginpage/Dashboard'
import Contactus from "./Loginpage/Contactus";


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Frontpage />}></Route>
          <Route path="/Aboutus" element={<Aboutus />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/Contactus" element={<Contactus />}></Route>
          <Route path="/Boardofdirectors" element={<Boardofdirectors />}></Route>
          <Route path="/MaterialUiform" element={<MaterialUIform />}></Route>
          <Route path="/Employer" element={<Employer />}></Route>
          <Route path="/Engineeringstudent" element={<Engineeringstudent />}></Route>
          <Route path="/Degreestudent" element={<Degreestudent />}></Route>
          <Route path="/Engineeringcollege" element={<Engineeringcollege />}></Route>
          <Route path="/Degreecollege" element={<Degreecollege />}></Route>
          <Route path="/Unemployed" element={<Unemployed />}></Route>
        </Routes>
        </BrowserRouter>     
    </div>
  );
}
export default App; 

