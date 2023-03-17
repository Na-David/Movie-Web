// import {BrowserRouter as Router, Switch, Route, BrowserRouter} from "react-router-dom";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Detail from "./routes/Detail";
import "./App.css";

import Home from './routes/Home';
import HighRating from './routes/HighRating';
import Music from './routes/Music';
import Romance from './routes/Romance';


const App = () => {

  return (
    <div>
      <BrowserRouter basename='/'>
        <div className='App'>
          <Routes>
            <Route path = '/' element = {<Home />} />
            <Route path = '/high_rating' element = {<HighRating />} />
            <Route path = '/romance' element = {<Romance />} />
            <Route path = '/music' element = {<Music />} />
            <Route path = '/movie/:id' element = {<Detail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
    // <Router>
    //   <Switch>
    //     <Route path="/movie/:id">
    //       <Detail />
    //     </Route>
    //     <Route path="/">
    //       <Home />
    //     </Route>
    //     <Route path="/high_rating">
    //       <HighRating />
    //     </Route>
    //     <Route path="/romance">
    //       <Romance />
    //     </Route>
    //     <Route path="/music">
    //       <Music />
    //     </Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
