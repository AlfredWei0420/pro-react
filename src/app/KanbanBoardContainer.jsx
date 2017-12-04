import React, {Component} from 'react';
import KanbanBoard from './board.jsx';

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

  }

  deleteTask(cardId, taskId, taskIndex) {

  }

  toggleTask(cardId, taskId, taskIndex) {

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