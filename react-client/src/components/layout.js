import React, {PropTypes} from 'react';
import Header from './common/Header.js';
import HomePage from './homePage/HomePage.js';

class Layout extends React.Component {

  render()  {
    return  (
      <div>
        <Header/>
        <HomePage/>
        <div className="text-center">
          <h6>Thanks Bowtie | Let's be Coworkers | I own a bottle of the Aberlour and will share some | #bribery</h6>
        </div>
      </div>

    )
  }
}

export default Layout;
