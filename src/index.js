import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AComponent from './react-router_test/AComponent';
import BComponent from './react-router_test/BComponent';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

//import {Router, Route} from "react-router";

// ReactDOM.render((
//     <Router>
//         <Route path="/" component={App}>
//             <Route path="a" component={AComponent}/>
//             <Route path="b" component={BComponent}/>
//         </Route>
//     </Router>
// ), document.getElementById('app'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
