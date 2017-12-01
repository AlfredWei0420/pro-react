import React, {Component} from 'react';
import List from './list.jsx';
import PropTypes from 'prop-types'; 

class KanbanBoard extends Component {
  render() {
    return (
      <div className="app">
        <List id="todo"
              title="To DO"
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter(function(card) {
                return card.status === 'todo';
              })} />
        <List id="in-progress"
              title="In Progress"
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter(function(card) {
                return card.status === 'in-progress';
              })} />
        <List id="done"
              title="Done"
              taskCallbacks={this.props.taskCallbacks}
              cards={this.props.cards.filter(function(card) {
                return card.status === 'done';
              })} />
      </div>
    );
  }
}

// KanbanBoard.proTypes = {
//   cards: PropTypes.arrayOf(PropTypes.object),
//   taskCallbacks: PropTypes.object,
// }

// original code with ES6
// class KanbanBoard extends Component {
//   render(){
//     return (
//       <div className="app">
//         <List id='todo'
//               title="To Do"
//               cards={this.props.cards.filter((card) => card.status === "todo")} />
//         <List id='in-progress'
//               title="In Progress"
//               cards={this.props.cards.filter((card) => card.status === "in-progress")} />
//         <List id='done'
//               title='Done'
//               cards={this.props.cards.filter((card) => card.status === "done")} />
//       </div>
//     );
//   }
// };

export default KanbanBoard;
