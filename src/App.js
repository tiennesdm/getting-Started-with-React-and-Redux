import React, { Component } from 'react';
import {
  BrowserRouter as Router,
} from "react-router-dom";
// import Post from './container/Post/Post'
import Blog from './components/Blog'

class App extends Component {
  render() {
    return (
      <Router>
         <div className="App">
           {/* <Post /> */}
           <Blog />
      </div>

      </Router>
     
    );
  }
}

export default App;
