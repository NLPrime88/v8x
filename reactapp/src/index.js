import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import Prov from './context'
import Users from './component/users';
const root=ReactDOM.createRoot(document.getElementById("react"));
root.render

(

 <Prov>

<BrowserRouter>
<Routes>
  <Route path="/login/:id" element={<Users />}/>
    <Route  index element={<App />} />
   
</Routes>
</BrowserRouter>
</Prov>

);
/*var x='root';

document.getElementById('react').innerHTML=`<div id=${x}> </div>`;
//function btn(){
    //document.getElementById("element").innerHTML="n";
//}
//document.getElementById('crown').onclick=btn();

*/



reportWebVitals();