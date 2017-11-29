import React, {Component} from 'react';

class CheckList extends Component {
  render() {
    let tasks = this.props.tasks.map(function(task){
      return (
        <li key={task.id} className = "checklist_task">
          <input type="checkbox" defaultChecked={task.done} />
          {task.name}
          <a href="#" className="checklist__task--remove"></a>
        </li>
      );
    });
    return (
      <div className="checklist">
        <ul>{tasks}</ul>
        <input type="text"
               className="checklist--add-task"
               placeholder="Type then hit Enter to add a card" />
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
