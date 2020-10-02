import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from "./pages/Login"
import Signup from "./pages/Signup"

const Routing=()=>{
  return (
    <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/signup"><Signup /></Route>
    </Switch>
  )
}


function App() {
  return (
    <>
    <BrowserRouter>
    <Routing />
    </BrowserRouter>
    </>
  );
}

export default App;
