import React, { Component } from 'react';
import CheckList from './checkList.jsx';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  changeState() {
    this.setState({showDetails: !this.state.showDetails});
    console.log(this.state.showDetails);
  }
  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card_details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    }
    console.log(cardDetails);
    return (
      <div className="card">
      <div className="card_title" onClick={this.changeState.bind(this)}>{this.props.title}</div>
      {cardDetails}
    </div>
    )
  }
}

// class Card extends Component {
//   constructor() {
//     super(...arguments);
//     this.state = {
//       showDetails: false
//     }
//   };
  
//   render() {
//     let cardDetails;
//     if (this.state.showDetails) {
//       cardDetails = (
//         <div className="card__details">
//           {this.props.description}
//           <CheckList cardId={this.props.id} tasks={this.props.tasks} />
//         </div>
//       );
//     };
//     return (
//       <div className="card">
//         <div className="card__title" onClick={
//           ()=>this.setState({showDetails: !this.state.showDetails})
//         }>{this.props.title}</div>
//         {cardDetails}
//       </div>
//     );
//   }
// }

export default Card;
