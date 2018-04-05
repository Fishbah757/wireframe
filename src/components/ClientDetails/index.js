import React, { Component } from 'react';
import './clientDetails.css';

class ClientListItem extends Component {
  render() {
    const { client } = this.props;
    return (
      <div className="row">
        <div className="avatar-container">
          <div className="client-preview-avatar">
            <img src={client.general.avatar} alt="avatar" />
          </div>
        </div>
        <div className="client-info">
          <div className="full-client-name">
            {client.general.firstName} {client.general.lastName}
          </div>
          <div className="client-job">
            {client.job.title}
          </div>
        </div>
      </div>
    );
  }
}

export default ClientListItem;