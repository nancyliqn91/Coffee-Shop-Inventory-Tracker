import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>Name: {props.name} | Origin: {props.origin}</h3> 
      <hr/>
      </div>
    </React.Fragment>
  );
}

Coffee.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string,
  price: PropTypes.string.isRequired,
  roast: PropTypes.string,
  quantity: PropTypes.number.isRequired,
  id: PropTypes.string, 
  whenCoffeeClicked: PropTypes.func 
};

export default Coffee;