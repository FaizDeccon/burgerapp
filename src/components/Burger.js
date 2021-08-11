import React from 'react';
import './Burger.css';

class Burger extends React.Component{
  constructor(){
    super();
    this.state = {
      lettuce: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    };
  }

  changeItem = (action, item) => {
    let stateItem;

    switch(item){
      case 'lettuce':{
        stateItem = this.state.lettuce;
        break;
      }
      case 'bacon':{
        stateItem = this.state.bacon;
        break;
      }
      case 'cheese':{
        stateItem = this.state.cheese;
        break;
      }
      case 'meat':{
        stateItem = this.state.meat;
        break;
      }
      default: break;
    }

    if(action === 'add'){
      stateItem += 1;
    }
    else{
      stateItem -= 1;
    }

    this.setState({
      [item]: stateItem >= 0 ? stateItem : 0
    });
  }

  burgerItems = () => {
    let burger = [];

    for(let i = 0; i < this.state.lettuce; i++){
      burger.push(<div key = {burger.length} className="lettucePiece"></div>)
    }
    for(let i = 0; i < this.state.bacon; i++){
      burger.push(<div key = {burger.length} className="baconPiece"></div>)
    }
    for(let i = 0; i < this.state.cheese; i++){
      burger.push(<div key = {burger.length} className="cheesePiece"></div>)
    }
    for(let i = 0; i < this.state.meat; i++){
      burger.push(<div key = {burger.length} className="meatPiece"></div>)
    }
    return burger;
  }

  bill = () => (this.state.lettuce + this.state.bacon + this.state.cheese + this.state.meat) * 0.5;

  render(){
    return(
      <>
        <div className="burgerDisplay">
          <div className="topPiece"></div>
          {this.burgerItems()}
          <div className="bottomPiece"></div>
        </div>
        <div className="burgerMaker">
          <h3>Add Items</h3>
          <div className="itemBtns">
            <h4>Lettuce:</h4>
            <button onClick={() => this.changeItem('add', 'lettuce')} className="itemBtn">Add</button>
            <button onClick={() => this.changeItem('remove', 'lettuce')} className="itemBtn">Remove</button>
            <h4>Bacon:</h4>
            <button onClick={() => this.changeItem('add', 'bacon')} className="itemBtn">Add</button>
            <button onClick={() => this.changeItem('remove', 'bacon')} className="itemBtn">Remove</button>
          </div>
          <div className="itemBtns">
            <h4>Cheese:</h4>
            <button onClick={() => this.changeItem('add', 'cheese')} className="itemBtn">Add</button>
            <button onClick={() => this.changeItem('remove', 'cheese')} className="itemBtn">Remove</button>
            <h4>Meat:</h4>
            <button onClick={() => this.changeItem('add', 'meat')} className="itemBtn">Add</button>
            <button onClick={() => this.changeItem('remove', 'meat')} className="itemBtn">Remove</button>
          </div>
          <div className="bill">
            <h4>Total Bill: {this.bill()} $</h4>
          </div>
        </div>
      </>
    );
  }
}
export default Burger;
