import React, { Component } from 'react';
import List from './list.jsx';

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List id="todo" title="To DO" cards={this.props.cards.filter(function(card){
          card.status === 'todo'})} />
        <List id="in-progress" title="In Progress" cards={this.props.cards.filter(function(card){
          card.status === 'in-progress'})} />
        <List id="done" title="Done" cards={this.props.cards.filter(function(card){
          card.status === 'done'})} />
      </div>
    )
  }
}

export default KanbanBoard;