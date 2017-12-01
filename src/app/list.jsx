import React, { Component } from 'react';
import Card from './card.jsx';
import PropTypes from 'prop-types'; 

class List extends Component {
  render() {
    let that = this;
    var cards = this.props.cards.map(function(card){
      return <Card key={card.id}
                   taskCallbacks={that.props.taskCallbacks}
                   id = {card.id}
                   title = {card.title}
                   description = {card.description}
                   color = {card.color}
                   tasks = {card.tasks}/>
    });

    return (
      <div className="list">
        <h1> {this.props.title}</h1>
        {cards}
      </div>
    );
  }
}

List.proTypes = {
  cards: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  taskCallbacks: PropTypes.object,
}
//original code with ES6
// class List extends Component {
//   render() {
//     var cards = this.props.cards.map((card) => {
//       return <Card id={card.id}
//                    title={card.title}
//                    description={card.description}
//                    tasks={card.tasks} />
//     });

//     return (
//       <div className="list">
//         <h1>{this.props.title}</h1>
//         {cards}
//       </div>
//     );
//   }
// };

export default List;