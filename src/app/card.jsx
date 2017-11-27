import React, { Component } from 'react';
import CheckList from './checkList.jsx';

class Card extends Component {
  render() {
    return (
      <div className="card">
      <div className="card_title">{this.props.title}</div>
      <div>
        {this.props.description}
        <CheckList cardId={this.props.id} task={this.props.tasks} />
      </div>
    </div>
    )
  }
}

export default Card;
