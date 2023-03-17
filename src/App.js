
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from "./routes/Detail";
import "./App.css";

import Home from './routes/Home';
import HighRating from './routes/HighRating';
import Music from './routes/Music';
import Romance from './routes/Romance';

const App = () => {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </div>
    </BrowserRouter>
    // <Router>
    //   <Switch>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
