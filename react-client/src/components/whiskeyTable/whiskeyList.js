import React from 'react';
import WhiskeyRow from './whiskeyRow';

const WhiskeyList = ({courses})  =>  {
  return  (
    <table className="table">
      <thead>
      <tr>
        <th>&nbsp;</th>
        <th>Title</th>
        <th>Author</th>
        <th>Category</th>
        <th>Length</th>
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
