import React from 'react';
import Header from './components/Header';
import Content from './components/Content/Content';

function App() {
  const appCss = {
    top: "50%",
    left: "50%",
    width: "80em",
    height: "40em",
    transform: "translate(-50%, -50%)",
    border: "1px solid #666",
    backgroundColor: "#b9faac",
    position: "fixed"
  }

  return (
    <div>
      <div style={appCss}>
        <Header></Header>
        <Content></Content>
      </div>
    </div>
    
  )
}

export default App
