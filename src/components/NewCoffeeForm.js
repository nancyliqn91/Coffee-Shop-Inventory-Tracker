import React from "react";
import PropTypes from "prop-types"; 
import { v4 } from 'uuid';
import ReusableForm from "./ReusableForm";

function NewCoffeeForm(props){

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value, 
      origin: event.target.origin.value, 
      price: event.target.price.value, 
      roast: event.target.roast.value, 
      // to make quantity number
      quantity: parseInt(event.target.quantity.value), 
      id: v4()
    });
  }
  
  return (
    <React.Fragment>
      <ReusableForm 
      formSubmissionHandler={handleNewCoffeeFormSubmission}
      buttonText="Add Coffee Bean!" />
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;