import React, { PropTypes } from 'react';
import axios from 'axios';

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {whiskies: []}
    }

    componentDidMount() {
      this.getWhiskies()
    }

    getWhiskies() {
      axios.get('localhost:3000/api/v1/whiskey')
        .then(whiskey  => {
          console.log(whiskey)
          // this.setState({})
        })
        .catch(err  =>  {
          console.log(err)
        })
    }

    render()    {
      const {whiskies} = this.props;
       return   (
         <div>
           <p>testestest</p>
           <WhiskeyList whiskies={whiskies}/>
         </div>
       )
    }
}

export default HomePage;
