import './App.css';
import React from "react";
import Buttons from "./components/Buttons/Buttons";
import {Switch, Route} from "react-router-dom";
import Weather from "./components/Weather/Weather";
import AsideNavbar from "./components/AsideNavbar/AsideNavbar";

const App = () => {


  return (
    <div className="wrapper">
        <AsideNavbar/>
        <Switch>
            <Route path='/buttons' render={() => <Buttons/>}/>
            <Route exact path = '/weather' render={() => <Weather/>}/>
            <Route path= '/' render={() =>  <Buttons/>}/>
            <Route path='*'
                   render={() => <div>404 NOT FOUND</div>}
            />
        </Switch>

    </div>
  );
}

export default App;