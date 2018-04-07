import React, { Component } from 'react';
import './searchStyle.css';
import image from './search-icon-hi.png';

class SearchInput extends Component {
  render() {
    const { onChange, value } = this.props;
    return (
      <div className="search-title">
        <h1>Search</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            value={value}
            placeholder="Please type name of client.."
            onChange={onChange}
          />
          <img className="search-icon" src={image} alt="search" />
        </div>
      </div>
    );
  }
}

export default SearchInput;
