import React, { Component } from 'react';
import CheckList from './checkList.jsx';
import PropTypes from 'prop-types'; 

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false,
    };
  }
  changeState() {
    this.setState({showDetails: !this.state.showDetails});
  }
  render() {
    let cardDetails;
    if (this.state.showDetails) {
      cardDetails = (
        <div className="card_details">
          {this.props.description}
          <CheckList cardId={this.props.id} tasks={this.props.tasks} taskCallbacks={this.props.taskCallbacks} />
        </div>
      );
    }
    let sideColor = {
      position: 'absolute',
      zIndex: -1,
      top: 0,
      bottom: 0,
      left: 0,
      width: 7,
      backgroundColor: this.props.color
    };

    return (
      <div className="card">
        <div style={sideColor} />
        <div className={this.state.showDetails?"card__title card__title--is-open":"card__title"}
                        onClick={this.changeState.bind(this)}>
                        {this.props.title}
        </div>
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
Card.proTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  color: PropTypes.string,
  tasks: PropTypes.array,
  taskCallbacks: PropTypes.object,
}

export default Card;
