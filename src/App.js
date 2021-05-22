import { BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";
import NavBar from "./components/NavBar";
import React from "react";



function App() {
  
  
  
  return (
 
  
    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route component={Home} path='/' exact></Route>
      <Route component={About} path='/about'></Route>
      <Route component={SinglePost} path='/post/:slug'></Route>
      <Route component={Post} path='/post'></Route>
      <Route component={Project} path='/project'></Route>
    </Switch>
    </BrowserRouter>
    
  );
    
  
}

export default App;
