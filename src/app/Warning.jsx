import React, { Component } from 'react';
import { Message } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import Classnames from 'classnames';

class Warning extends Component {
    constructor(props) {
      super(props);
      this.state = {
        type: "",
        visible:true,
        height: 0,
      }
    }
    componentDidMount() {
      let that = this;
      const recieve = this.props;
      that.setState({type:recieve.type})
      let height=document.getElementsByClassName("info");
      that.setState({height:height});
      // console.log(height[0].scrollHeight)
      if(height[0].scrollHeight > 70){
        height[0].style.padding = '19px';
      }
    }
    onClick(){
      this.setState({visible:false});
    }

    onClassNameChange(){
      // let onClassNameChange='aaa';
      // setTimeout(() => {
      //   onClassNameChange = 'fade-out';
      // },1000);
      setTimeout(() => {
        this.setState({visible:false})
      },200);
      // return onClassNameChange;
    }

    render() {
      let message;
      let time;
      let classChange = Classnames({
        'btn': true,
        'fade-out':time === 1
        }
      )
      if(this.state.type === 'info' && this.state.visible) {
       message = (
         <div>
         <Message 
          info
          header='Was this what you wanted?'
          content="Did you know it's been a while?"
         />
         <p>X</p>
         </div>
       ) 
      } else if(this.state.type === 'warning' && this.state.visible){
          message = (
            <div className = {classChange} >
           <Message 
            warning
            header='You must register before you can do that!'
            content='Visit our registration page, then try again.'
            />
            <p className = 'cross-icon' onClick = {this.onClick.bind(this)}>X</p>
            </div>
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