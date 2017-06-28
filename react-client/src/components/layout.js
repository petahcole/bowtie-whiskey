import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import HomePage from './homePage/HomePage.js';

class Layout extends React.Component {

  render()  {
    return  (
      <div>
        <h1>Hello World</h1>
        <Header/>
        <HomePage/>
      </div>
    )
  }
}

export default Layout;
