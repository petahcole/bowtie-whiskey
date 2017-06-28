import React, { PropTypes } from 'react';
import axios from 'axios';
import WhiskeyList from '../whiskeyTable/whiskeyList.js'

class HomePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {whiskies: []}
    }

    componentWillMount() {
      const self = this
      axios.get('http://localhost:3000/api/v1/whiskey')
        .then(res  => {
          this.setState({whiskies: res.data})
        })
        .catch(err  =>  {
          console.log(err)
        })
    }

    render()    {
      const whiskies = this.state.whiskies;
       return   (
         <div className="container">           
           <WhiskeyList whiskies={whiskies}/>
         </div>
       )
    }
}

export default HomePage;
