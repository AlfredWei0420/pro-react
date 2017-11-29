import React, {Component} from 'react';

class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: 'React',
      select: 'A',
    }
  }
  handleSearch(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSelect(event) {
    this.setState({select: event.target.value});
  }

  render() {
    return (
      <div>
        Search Term: <input type="search" value={this.state.searchTerm}
        onChange={this.handleSearch.bind(this)} />
        <textarea value="textarea" id="" cols="30" rows="10" />
        <select value="{this.state.select}" onChange={this.handleSelect.bind(this)} >
          <option value="A">Mobile</option>
          <option value="B">Work</option>
          <option value="C">Home</option>
        </select>
      </div>
    )
  }
}

export default Search;
