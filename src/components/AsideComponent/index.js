import React, { Component } from 'react';
import './asideStyle.css';
import { connect } from 'react-redux';
import ClientListItem from '../ClientListItem';
import { selectClient } from '../../actions';
import SearchInput from '../SearchInput';

class AsideComponent extends Component {
  constructor(){
    super();
    this.onSelectClient = this.onSelectClient.bind(this);
  }

  onSelectClient(client){
    this.props.onSelectClient(client);
  }

  render() {
    return (
      <div className="aside-wrapper">
        <ul className="clients-list">
        <li>
          <SearchInput />
        </li>
        {
          this.props.clientsArray.map((client, index) => {
            return (
              <ClientListItem client={client} key={index} onSelectClient={this.onSelectClient} />
            );
          })
        }
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    clientsArray: state.clients
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