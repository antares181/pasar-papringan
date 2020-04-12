import React, { useRef, useEffect } from 'react';
import './assets/css/app.scss';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import gsap, { TimelineLite } from 'gsap';

function App() {
  let app = useRef(null);
  let tl = new TimelineLite({ delay: .8 });
  
  useEffect(() => {
    gsap.to(app, 0, { css: { visibility: 'visible' } })
  }, [tl])

  return (
    <Router>
      <div className='app' ref={el => app = el}>
        <Header />
        <Switch>
          <Route exact path='/pasar-papringan' component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
