import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import Layout from './components/layout.js'
// import './styles/styles.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Layout />, document.getElementById('app'))
