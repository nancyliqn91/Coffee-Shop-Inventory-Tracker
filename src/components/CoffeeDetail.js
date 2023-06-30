import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingBuy, onClickingAddBurlap } = props; 

  return (
    <React.Fragment>

      <h1>Coffee Detail</h1>

      <h3>Name: {coffee.name}</h3>
      <p><em>Origin: {coffee.origin}</em></p>   
      <p><em>Roast: {coffee.roast}</em></p>
      <p><em>Unit Price(dollars/pound): {coffee.price}</em></p>
      <p><em>Pounds: {coffee.quantity}</em></p>

      <button onClick={ props.onClickingEdit }>Update Coffee</button>
      <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee</button>

      {
      coffee.quantity > 0 ? 
        (<button onClick={() => onClickingBuy(coffee.id)}> Buy </button>) : 
        (<h1>{coffee.name} is out of stock</h1>)
      }

      {
      coffee.quantity < 10 && (
        <div>
          <h1>It's less than 10 punds! Time to restock {coffee.name}</h1>
          <button onClick={() => onClickingAddBurlap(coffee.id)}>Restock</button>
        </div>
      )
      }

      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
  onClickingBuy: PropTypes.func,
  onClickingAddBurlap: PropTypes.func
};

export default CoffeeDetail;