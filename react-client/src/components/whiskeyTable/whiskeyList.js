import React from 'react';
import WhiskeyRow from './whiskeyRow';

const WhiskeyList = ({whiskies})  =>  {
  return  (
    <table className="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Distillery</th>
        <th>Origin</th>
        <th>Proof</th>        
      </tr>
      </thead>
      <tbody>
        {whiskies.map(whiskey  =>
          <WhiskeyRow key={whiskey.id} whiskey={whiskey}/>
        )}
      </tbody>
    </table>
  );
};

export default WhiskeyList
