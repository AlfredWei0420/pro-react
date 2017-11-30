import React, {Component} from 'react';
import PropTypes from 'prop-types'; 

class SearchBar extends Component {
  render() {
    return (
      <div>
        <input type="search" placeholder="search" />
      </div>
    )
  }
}

class ContactItem extends Component {
  render() {
    return <li>{this.props.name} - {this.props.email} </li>
  }
  // ContactItem.propTypes = {
  //   name: PropTypes.string.isRequired,
  //   name: PropTypes.string.isRequired
  // }
}

class ContactList extends Component {
  render() {
    let contacts;
    contacts = this.props.contacts.map(function(contact,index){
      return <ContactItem key={index}
                          name={contact.name}
                          email={contact.email} />
    })
    return (
      <ul>
        {contacts}
      </ul>
    )
  }
  // ContactList.propTypes = {
  //   contacts: PropTypes .arrayOf(PropTypes.object)
  // }
}

class ContactsApp extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ContactList contacts={this.props.contacts} />
      </div>
    )
  }
  // ContactsApp.propTypes = {
  //   contacts: PropTypes.arrayOf(PropTypes.object)
  // }
}

export default ContactsApp;