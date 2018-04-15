import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class Warning extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "",
      }
    }
    componentDidMount() {
      let that = this;
      const recieve = this.props;
      console.log('aaa:',recieve.type);
      that.setState({type:recieve.type})
    }
    render() {
      console.log(this.state.type);
      let message
      if(this.state.type === 'info') {
       message = (
         <Message
          info
          header='Was this what you wanted?'
          content="Did you know it's been a while?"
         />
       ) 
      } else if(this.state.type === 'warning'){
          message = (
           <Message
            warning
            header='You must register before you can do that!'
            content='Visit our registration page, then try again.'
            />
          )       
      }
      return (
        <div>
           {message}
        </div>
      )        
    }
}

export default Warning;