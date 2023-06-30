import React from "react";
import PropTypes from "prop-types";
import Card from 'react-bootstrap/Card';

function CoffeeDetail(props){
  const { coffee, onClickingDelete, onClickingBuy, onClickingAddBurlap } = props; 

  return (
    <React.Fragment>
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Coffee Bean Detail</Card.Title>
        <Card.Text>
          <h3>Name: {coffee.name}</h3>
          <p><em>Origin: {coffee.origin}</em></p>   
          <p><em>Roast: {coffee.roast}</em></p>
          <p id="price"><em>Unit Price(dollars/pound): {coffee.price}</em></p>
          <p><em>Pounds: {coffee.quantity}</em></p>
        </Card.Text>

        <button onClick={ props.onClickingEdit }>Update Coffee Bean</button>
        <button onClick={()=> onClickingDelete(coffee.id) }>Delete Coffee Bean</button>

        {
        coffee.quantity > 0 ? 
          (<button onClick={() => onClickingBuy(coffee.id)}> Buy One Pound</button>) : 
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
      
      </Card.Body>
    </Card>  

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