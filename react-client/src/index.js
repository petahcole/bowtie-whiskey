// import 'babel-polyfill';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import HomePage from './components/homePage/HomePage.js'

const React = require('react');
const ReactDOM = require('react-dom');
const Layout = require('./components/layout.js');
// import './styles/styles.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<Layout />, document.getElementById('app'))
