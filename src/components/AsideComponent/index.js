import React, { Component } from 'react';
import './asideStyle.css';
import { connect } from 'react-redux';
import ClientListItem from '../ClientListItem';
import { selectClient } from '../../actions';
import SearchInput from '../SearchInput';

class AsideComponent extends Component {
  constructor(props){
    super(props);
    this.onSelectClient = this.onSelectClient.bind(this);
    this.onSearchUpdate = this.onSearchUpdate.bind(this);

    this.state = {
      searchValue: '',
      filteredClients: props.clientsArray
    }
  }

  onSelectClient(client){
    this.props.onSelectClient(client);
  }

  onSearchUpdate(e){
    let value = e.target.value.toLowerCase();
    let filteredArray = this.props.clientsArray.filter(client => {
      return (
        client.general.firstName + ' '
        + client.general.lastName
        + client.job.title
        + client.job.company
        + client.contact.email
        + client.contact.phone
        + client.address.street
        + client.address.city
        + client.address.zipCode
        + client.address.country
      ).toLowerCase().includes(value);
    });
    this.setState({
      searchValue: value,
      filteredClients: filteredArray
    });
  }

  render() {
    return (
      <div className="aside-wrapper">
        <ul className="clients-list">
        <li>
          <SearchInput onChange={this.onSearchUpdate} value={this.state.searchValue} />
        </li>
        {this.state.filteredClients.length > 0 ?
          this.state.filteredClients.map((client, index) => {
            return (
              <ClientListItem client={client} background={this.props.chosenClient == client ? 'rgba(170,206,242)' : 'transparent' } key={index} onSelectClient={this.onSelectClient} />
            );
          })
          :
          <li>
            <h1 className="no-details-title">No results</h1>
          </li>
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    clientsArray: state.clients,
    chosenClient: state.currentClient
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSelectClient: (client) => {
      dispatch(selectClient(client))
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsideComponent);