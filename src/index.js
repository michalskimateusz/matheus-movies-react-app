import React from 'react';
import ReactDOM from 'react-dom';
import styles from './index.module.scss';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router} from 'react-router-dom';
import BaseRoutes from './router/routes/BaseRoutes';
import store from './store/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <Provider store={store}>
    <div className={styles.root}>
      <Router>
        <BaseRoutes/>
      </Router>
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
