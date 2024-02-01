import React from "react";
import Home from './Components/Home'

import {BrowserRouter,Route,Routes} from 'react-router-dom'


function App() {
  return (
   <>
   <BrowserRouter basename="/airbnbdeploy">
   <Routes>
    <Route path="/airbnbdeploy" element={<Home/>}></Route>
   </Routes>
   </BrowserRouter>
   
   </>
  
  );
}

export default App;
