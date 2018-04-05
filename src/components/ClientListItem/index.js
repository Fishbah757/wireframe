import React, { Component } from 'react';
import './clientListItem.css';

class ClientListItem extends Component {
  render() {
    const { client, onSelectClient } = this.props;
    return (
      <li className="client-general row" onClick={() => onSelectClient(client)}>
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
      </li>
    );
  }
}

export default ClientListItem;