import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete } = props; 

  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      
      <h3>Name: {coffee.name}</h3>
      <p><em>Origin: {coffee.origin}</em></p>   
      <p><em>Roast: {coffee.roast}</em></p>
      <p><em>Unit Price: {coffee.price}</em></p>
      <p><em>Pounds: {coffee.quantity}</em></p>

      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>

      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
};

export default CoffeeDetail;