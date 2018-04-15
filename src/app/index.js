import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './GroceryList.jsx';
import { Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Warning from './warning.jsx'
import './style.css';

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React</h1>
        <GroceryList />
        <Message info >
         <Message.Header>Was this what you wanted?</Message.Header>
         <p>Did you know it's been a while?</p>
        </Message>
        <Warning type='warning' header="aaa" info="bbb" />
      </div>
      
    );
  }
}

ReactDOM.render(<Hello />, document.getElementById('root'));