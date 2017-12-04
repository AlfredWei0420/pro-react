import React, {Component} from 'react';
import KanbanBoard from './board.jsx';
import update from 'react-addons-update';

const API_URL = 'http://kanbanapi.pro-react.com';
const API_HEADERS = {
  'Content-Type': 'application/json',
   'Authorization': 'any-string-you-like'
};

class KanbanBoardContainer extends Component {
  constructor() {
    super()
    this.state = {
      cards: [],
    }
  }
  addTask(cardId, taskName) {
    let cardIndex = this.state.cards.findIndex(function(card) {
      return card.id === cardId;
    })
    let that = this;
    let newTask = {id:Date.now(), name:taskName, done:false};
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {$push: [newTask]}
      }
    });
    this.setState({cards: nextState});
    fetch(`${API_URL}/cards/${cardId}/tasks/`, {
      method: 'post',
      headers: API_HEADERS,
      body: JSON.stringify(newTask),
    }).then(function(response){
      response.json().then(function(responseData){
        newTask.id = responseData.id;
        that.setState({cards: nextState});
      })
    });
  }

  deleteTask(cardId, taskId, taskIndex) {
    let cardIndex = this.state.cards.findIndex(function(card) {
      return card.id === cardId;
    })
    let that = this;
    let nextState = update(this.state.cards, {[cardIndex]: {tasks: {$splice: [[taskIndex,1]]}}});
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`, {
      method: 'delete',
      headers: API_HEADERS,
    }).then(function(response){
      console.log(response)
      if(response.ok === true) {
        fetch(API_URL+'/cards', {
          method: 'GET',
          headers: API_HEADERS,
        }).then(function(response) {
          response.json().then(function(responseData) {
            that.setState({cards: responseData})
          }).catch(function(error) {
            console.log('Error fetching and parsing data', error)
            })
        })
      }
    })
  }

  toggleTask(cardId, taskId, taskIndex) {
    let cardIndex = this.state.cards.findIndex(function(card) {
      card.id === cardId;
    })
    let newDoneValue;
    let nextState = update(this.state.cards, {
      [cardIndex]: {
        tasks: {
          [taskIndex]: {
            done: {$apply: function(done){
              return newDoneValue = !done;
            }}
          }
        }
      }
    });
    this.setState({cards:nextState});
    fetch(`${API_URL}/cards/${cardId}/tasks/${taskId}`,{
      method: 'put',
      headers: API_HEADERS,
      body: JSON.stringify({done:newDoneValue})
    });
  }

  componentDidMount() {
    let that = this;
    fetch(API_URL+'/cards', {
      method: 'GET',
      headers: API_HEADERS,
    }).then(function(response) {
      response.json().then(function(responseData) {
        that.setState({cards: responseData})
      }).catch(function(error) {
        console.log('Error fetching and parsing data', error)
        })
    })
  }

  render() {
    return (
      <KanbanBoard cards={this.state.cards}
                   taskCallbacks={{
                     toggle: this.toggleTask.bind(this),
                     delete: this.deleteTask.bind(this),
                     add: this.addTask.bind(this),
                   }} />
    ) 
  }
}
export default KanbanBoardContainer;