import React, { Component } from 'react';
import './clientListItem.css';

class ClientListItem extends Component {
  render() {
    const { client, onSelectClient, background } = this.props;
    return (
      <li className="client-general row" style={{background: background}} onClick={() => onSelectClient(client)}>
        <div className="avatar-container">
          <div className="client-preview-avatar">
            <img src={client.general.avatar} width="64" height="64" alt="avatar" />
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