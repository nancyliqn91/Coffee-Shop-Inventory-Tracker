import React from "react";
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.css';

function Coffee(props){
  return (
    <React.Fragment>
      <div class="container">
      <div class="row gx-5">
        <div class="col">
          <div class="p-3 border bg-light">  
            <div onClick = {() => props.whenCoffeeClicked(props.id)}>
            <h3>Name: {props.name} | Origin: {props.origin}</h3>        
            </div>
            </div>
        </div>
      </div>
    </div>
    <hr/>
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