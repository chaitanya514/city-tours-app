import Navbar from "./components/navbar/Navbar"
import './App.scss';

import TourList from "../src/components/navbar/TourList";

function App() {
  return (
    <div className="App">
       <Navbar />
       <TourList/>
     
    </div>
  );
}

export default App;
