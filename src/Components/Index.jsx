// React component
import React from 'react'; 

const Product= ({ data }) => {
  return (
    <div className="product-data-table" style={{width:"82%"}} >
      <h2>Products Data</h2>
      <div className='align-table'>
      <table style={{backgroundColor:"white",}}>
        <thead>
          <tr className="product-data-table-tr" style={{backgroundColor:"gray"}}>
            <th>Product Name</th>
            <th>Client Name</th>
            <th>Project Start Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product.name}>
              <td>{product.name}</td>
              <td>{product.clientName}</td>
              <td>{product.startDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default Product;

