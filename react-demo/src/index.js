import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

  var vm = window.bck2brwsr('main.js');
  vm.loadClass('cz.xelfi.demo.react4jdemo.BrowserMain', function (mainClass) {
    mainClass.invoke('main', ['ttt1']);

    console.log(window.Form);

    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      document.getElementById('root')
    );
  });


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
