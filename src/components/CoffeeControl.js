import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import EditCoffeeForm from './EditCoffeeForm';
import { v4 } from 'uuid';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage:false,
      mainCoffeeList: [{
        name: 'Liberica beans',
        origin: "West Africa" ,  
        roast: "Medium",
        price: "27",
        quantity: 13,
        id:v4() }], 

      selectedCoffee: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null,
        editing: false
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList
    .concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  }

  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList
    .filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  handleDeletingCoffee = (id) => {
    const newMainCoffeeList = this.state.mainCoffeeList
    .filter(coffee => coffee.id !== id);
    this.setState({
      mainCoffeeList: newMainCoffeeList,
      selectedCoffee: null
    });
  }

  handleEditClick = () => {
    // console.log("handleEditClick reached!");
    this.setState({editing: true});
  }

  handleEditingCoffeeInList = (coffeeToEdit) => {
    const editedMainCoffeeList = this.state.mainCoffeeList
      .filter(coffee => coffee.id !== this.state.selectedCoffee.id)
      .concat(coffeeToEdit);
    this.setState({
        mainCoffeeList: editedMainCoffeeList,
        editing: false,
        selectedCoffee: null
      });
  }

  handleBuyClick = () => {
    const selectedCoffee = this.state.selectedCoffee;

    if (selectedCoffee.quantity > 0) {
    this.setState({
      mainCoffeeList: this.state.mainCoffeeList
      .filter(coffee => coffee.id !== selectedCoffee.id)
      .concat({...selectedCoffee, quantity: selectedCoffee.quantity - 1}), 
      selectedCoffee: null })
    }
  }

  handleAddBurlapClick = () => {
    const selectedCoffee = this.state.selectedCoffee;

    if (selectedCoffee.quantity < 10) {
    this.setState({
      mainCoffeeList: this.state.mainCoffeeList
      .filter(coffee => coffee.id !== selectedCoffee.id)
      .concat({...selectedCoffee, quantity: selectedCoffee.quantity + 130}), 
      selectedCoffee: null })
    }
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null; 

    if (this.state.editing ) {      
      currentlyVisibleState = <EditCoffeeForm coffee = {this.state.selectedCoffee} 
      onEditCoffee = {this.handleEditingCoffeeInList}/>

      buttonText = "Return to Coffee Bean List";
    } 
    else if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} 
      onClickingDelete = {this.handleDeletingCoffee} onClickingEdit = {this.handleEditClick}  onClickingBuy={this.handleBuyClick} onClickingAddBurlap={this.handleAddBurlapClick} />

      buttonText = "Return to Coffee Bean List";
    } 
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} />
      
      buttonText = "Return to Coffee Bean List";
    } 
    else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} 
      onCoffeeSelection={this.handleChangingSelectedCoffee}/>;     
      buttonText = "Add Coffee Bean"; 
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick}>{buttonText}</button> 
      </React.Fragment>
    );
  }

}

export default CoffeeControl;