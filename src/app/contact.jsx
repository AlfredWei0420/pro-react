import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class SearchBar extends Component {
  handleChange(event) {
    this.props.onUserInput(event.target.value);
  }
  render() {
    return (
      <div>
        <input type="search" placeholder="search"
               value={this.props.filterText}
               onChange={this.handleChange.bind(this)} />
      </div>
    )
  }
}
SearchBar.propTypes = {
  filterText: PropTypes.string.isRequired,
  onUserInput: PropTypes.func.isRequired,
}

class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email} </li>
  }
}
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired
}

class ContactList extends Component {
  render() {
    
    let contacts, filteredContacts;
    let filterText = this.props.filterText;// if do not define this varable, this.props.filterText could not use inside filter function
    filteredContacts = this.props.contacts.filter(function(contact) {
      return contact.name.toUpperCase().indexOf(filterText.toUpperCase()) !== -1;
    });
    console.log(filteredContacts);
    contacts = filteredContacts.map(function(contact,index){
      return <ContactItem key={index}
                          name={contact.name}
                          email={contact.email} />
    });
    return (
      <ul>
        {contacts}
      </ul>
    )
  }
}
ContactList.propTypes = {
  contacts: PropTypes .arrayOf(PropTypes.object),
  filterText: PropTypes.string.isRequired,
}

class ContactsApp extends Component {
  constructor(){
    super()
    this.state={
      filterText:'',
    };
  }
  handleUserInput(searchTerm) {
    this.setState({filterText: searchTerm});
  }

  render() {
    return (
      <div>
        <SearchBar filterText={this.state.filterText}
                   onUserInput={this.handleUserInput.bind(this)} />
        <ContactList contacts={this.props.contacts}
                     filterText={this.state.filterText} />
      </div>
    )
  }
}
ContactsApp.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsApp;