import './App.css';
import About from './components/About';

import Navbar from './components/Navbar';
import TextFrom from './components/TextFrom';

function App() {
  return (
    <>
      {/* <Navbar title="My-app" aboutText="About My-app" /> */}
      <Navbar title="My-app"/>

      <div className="container my-3">

      <TextFrom heading="Enter The text to analyze below"/>
      {/* <About/> */}
      </div>
    </>
  );
}

export default App;
