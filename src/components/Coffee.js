import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} - {props.origin}</h3>     
      <p><em>{props.roast}-{props.price}</em></p>
      <p><em>{props.quantity}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string,
  origin: PropTypes.string,
  price: PropTypes.string,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenCoffeeClicked: PropTypes.func 
};

export default Coffee;