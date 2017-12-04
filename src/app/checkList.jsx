import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class CheckList extends Component {
  checkInputKeyPress(event){
    if(event.key === 'Enter'){
      this.props.taskCallbacks.add(this.props.cardId, event.target.value);
      event.target.value = '';
    }
  }

  render() {
    let that = this;
    let tasks = this.props.tasks.map(function(task, taskIndex){
      return (
        <li key={task.id} className = "checklist_task">
          <input type="checkbox" defaultChecked={task.done} onChange={
            that.props.taskCallbacks.toggle.bind(null, that.props.cardId, task.id, taskIndex)
          } />
          {task.name} {' '}
          <a href="#" className="checklist__task--remove" 
          onClick={
            that.props.taskCallbacks.delete.bind(null, that.props.cardId, task.id, taskIndex)
          }
          ></a>
        </li>
      );
    });
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text"
               className="checklist--add-task"
               placeholder="Type then hit Enter to add a Task"
               onKeyPress={this.checkInputKeyPress.bind(this)} />
      </div>
    );
  }
}

//original code with ES6
// class CheckList extends Component {
//   render() {
//     let tasks = this.props.tasks.map((task) => (
//       <li className="checklist__task">
//         <input type="checkbox" defaultChecked={task.done} />
//         {task.name}
//         <a href="#" className="checklist__task--remove" />
//       </li>
//     ));

//     return (
//       <div className="checklist">
//         <ul>{tasks}</ul>
//       </div>
//     );
//   }
// }

export default CheckList;
