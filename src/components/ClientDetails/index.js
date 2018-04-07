import React, { Component } from 'react';
import './clientDetails.css';

class ClientListItem extends Component {

  render() {
    const { client } = this.props;
    return (
      <div className="details-row">
        <div className="avatar-container">
          <div className="client-preview-avatar">
            <img src={client.general.avatar} alt="avatar" />
          </div>
        </div>
        <div className="client-details-info">
          <div className="full-client-details-name">
            {client.general.firstName} {client.general.lastName}
          </div>
          <div className="client-details-job">
            {client.job.title} - {client.job.company}
          </div>
          <div className="contact-title">
            Contacts:
          </div>
          <div className="contacts-info">
            Email: {client.contact.email}
            <br />
            Phone: {client.contact.phone}
          </div>
          <div className="contact-title">
            Address:
          </div>
          <address>
            {client.address.street}
            <br/>
            {client.address.city}
            <br />
            {client.address.zipCode}
            <br />
            {client.address.country}
          </address>
        </div>
      </div>
    );
  }
}

export default ClientListItem;