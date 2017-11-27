import React, { Component } from 'react';
import CheckList from './checkList.jsx';

// class Card extends Component {
//   render() {
//     return (
//       <div className="card">
//       <div className="card_title">{this.props.title}</div>
//       <div className="card_details">
//         {this.props.description}
//         <CheckList cardId={this.props.id} task={this.props.tasks} />
//       </div>
//     </div>
//     )
//   }
// }

class Card extends Component {
  constructor() {
    super(...arguments);
    this.state = {
      showDetails: false
    }
  };
  
  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card__details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} />
        </div>
      );
    };
    return (
      <div className="card">
        <div className="card__title" onClick={
          ()=>this.setState({showDetails: !this.state.showDetails})
        }>{this.props.title}</div>
        {cardDetails}
      </div>
    );
  }
}

export default Card;
