import React from 'react';
import ReactDOM from 'react-dom';
import GroceryList from './GroceryList.jsx';

class Hello extends React.Component {
  render() {
    return (
      <h1>Hello React</h1>
    );
  }
}

ReactDOM.render(<GroceryList />, document.getElementById('root'));