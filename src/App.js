import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from "./Main";
import Play from './Play';
import Winner from './Winner';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path = "/" element = {<Main/>}></Route>
          <Route path = "/play" element = {<Play/>}></Route>
          <Route path = "/w" element = {<Winner/>}></Route>
        </Routes>
    </div>
    </Router>
    
  );
}

export default App;
