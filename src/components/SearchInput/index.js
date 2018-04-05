import React, { Component } from 'react';
import './searchStyle.css';
import image from './search-icon-hi.png';

class SearchInput extends Component {
  render() {
    return (
      <div className="search-title">
        <h1>Search</h1>
        <div className="search-container">
          <input
            className="search-input"
            type="text"
            placeholder="Please type name of client.."
          />
          <img className="search-icon" src={image} alt="search" />
        </div>
      </div>
    );
  }
}

export default SearchInput;
