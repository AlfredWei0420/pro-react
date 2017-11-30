import React from 'react';
import ReactDOM from 'react-dom';
import Search from './controlled.jsx';
import Form from './uncontrolled.jsx';
import KanbanBoard from './board.jsx';
import ContactsApp from './contact.jsx';

let cardsList = [
  {
    id: 1,
    title: "Read the Book",
    description: "I should read the whole book",
    color:"#BD8D31",
    status: "in-progress",
    tasks: []
  },
  {
    id: 2,
    title: "Write some code",
    description: "Code along with the samples in the book",
    color:"#3A7E28",
    status: "todo",
    tasks: [
      {
        id: 1,
        name: "ContactList Example",
        done: true
      },
      {
        id: 2,
        name: "Kanban Example",
        done: false
      },
      {
        id: 3,
        name: "My own experiments",
        done: false
      }
    ]
  }
];

let contacts = [
  {name: "Cassio Zen", email: "cassionzen@gamil.com"},
  {name: "Dan Abramov", email: "garearon@gamil.com"},
  {name: "Pete Hunt", email: "floydophone@gamil.com"},
  {name: "Paul O'Shannessy", email: "zpao@gamil.com"},
  {name: "Ryan Florence", email: "rpflorence@gamil.com"},
  {name: "Sebasian Markbage", email: "semarkbage@gamil.com"},
];

// ReactDOM.render(<KanbanBoard cards={cardsList}  />, document.getElementById('root'));
ReactDOM.render(<ContactsApp contacts={contacts} />, document.getElementById('root'));