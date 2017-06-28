import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import HomePage from './homePage/HomePage.js';

class Layout extends React.Component {

  render()  {
    return  (
      <div>
        <Header/>
        <HomePage/>
      </div>
    )
  }
}

export default Layout;
