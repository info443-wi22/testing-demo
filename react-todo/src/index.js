import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css'; //load Bootstrap
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import tasksSlice from './redux/taskSlice';

import App from './components/App';

//Add some testing data
store.dispatch(tasksSlice.actions.addTask("Learn Redux"));

const SAMPLE_TASKS = [
  {id:1, description:'Learn JSX', complete:true},
  {id:2, description:'Learn about React State', complete:false},
  {id:3, description:'Get some sleep', complete:false} 
];


//pass data in as a prop!
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));