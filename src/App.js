import React from 'react';
import './App.css';
import Feed from './Feed';
import Sidebar from "./Sidebar.js"
import Widgets from './Widgets.js';


function App() {
  return (
    <div className="app">
      

      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      <Feed />

      {/* Widgets */}
      <Widgets />
    </div>
  );
}

export default App;
