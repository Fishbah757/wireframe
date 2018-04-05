import React, { Component } from 'react';
import './mainStyle.css';
import { connect } from 'react-redux';
import ClientDetails from '../ClientDetails';

class MainComponent extends Component {
  render() {
    const { currentClient } = this.props;
    return (
      <div className="main-wrapper">
      {
        this.props.currentClient == null ?
          <h1 className="no-details-title">Please select client</h1> 
          :
          <div className="details-block">
            <ClientDetails client={currentClient} />
          </div>
      }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentClient: state.currentClient
  };
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);