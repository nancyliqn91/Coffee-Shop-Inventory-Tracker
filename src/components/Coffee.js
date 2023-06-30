import React from "react";
import PropTypes from "prop-types";

function Coffee(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenCoffeeClicked(props.id)}>
      <h3>{props.name} - {props.origin}</h3>
      <p><em>{props.price}</em></p>
      <p><em>{props.roast}</em></p>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Ticket.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  origin: PropTypes.string,
  roast: PropTypes.string,
  quantity: PropTypes.number,
  id: PropTypes.string, 
  whenTicketClicked: PropTypes.func 
};

export default Ticket;