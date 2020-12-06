import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import './index.css';
import store from './store';
import BugTracker from './bugTracker';
import Projects from './projects';
import Timer from './timer';
import Home from './home';
import Login from './login';

// ReactDOM.render(
//     <React.StrictMode>
//         <Provider store = {store}>
//             <Projects projects />
//             <BugTracker store />
//         </Provider>
//     </React.StrictMode>
// , document.getElementById('root'));

// ReactDOM.render(
//     <React.StrictMode>
//       <Provider store={store}>
//         <Router>
//           <h1>My App</h1>
//           <Timer />
//           <br/>
//           <div>
//             <span> [ <Link to="/">Home</Link> ] </span>
//             <span> [ <Link to="/bugs">Bugs</Link> ] </span>
//             <span> [ <Link to="/projects">Projects</Link> ] </span>
//           </div>
//           <hr/>
//           <Switch>
//             <Route path="/bugs">
//               <BugTracker/>
//             </Route>
//             <Route path="/projects">
//               <Projects/>
//             </Route>
//             <Route path="/">
//               <Home/>
//             </Route>
//           </Switch>
//         </Router>
//       </Provider>
//     </React.StrictMode>,
//     document.getElementById("root")
//   );

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <h1>My App</h1>
        <Timer />
        <br/>
        <Login/>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/* 
import * as calculator from './calc';
console.log(calculator); 
*/

/* 
import * as calculator from "./calc";
//const add = calculator.add;
const { add } = calculator;
console.log(add(10,20)); 
*/

/* 
import { add } from "./calc";
console.log(add(10, 20)); 
*/

//importing the default exported entity
/* import calculator from './calc';
console.log(calculator);
 */

//importing the default exported and regular exported entities together
//import calculator, { add } from './calc';

//import add from './calc';
//console.log(add);