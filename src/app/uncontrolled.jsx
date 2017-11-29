import React, {Component} from 'react';

class Form extends Component {
  handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.name.value,
                event.target.email.value);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div className="formGroup">
          Name: <input name="name" type="text" />
        </div>
        <div className="formGroup">
          E-mail: <input name="email" type="mail"/>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default Form;