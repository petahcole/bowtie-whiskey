import React from 'react';

const WhiskeyRow = ({whiskey})  =>  {
  return (
    <tr className="table-row">
      <td>{whiskey.name}</td>
      <td>{whiskey.distillery}</td>
      <td>{whiskey.origin}</td>
      <td>{whiskey.proof}</td>
    </tr>
  );
};

export default WhiskeyRow;
