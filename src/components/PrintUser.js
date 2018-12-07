import React, { Component } from 'react';
import { connect } from 'react-redux';
import switchAction from '../action/switchAction'

const mapDispatchToProps = (dispatch) => {
  return {
    switchColor: () => dispatch( switchAction() )
  }
}

const mapStoreToProps = (store) => {
  return {
    color: store.switchReducer.color
  }
}


class PrintUser extends Component {
  render() {
    return (
      <div className={this.props.color}>
        <h4>{this.props.name}</h4>
        <h4>{this.props.age}</h4>
        <h4>{this.props.nation}</h4>
        <button onClick={this.props.switchColor}>Switch Color</button>
      </div>
    );
  }
}

export default connect(mapStoreToProps, mapDispatchToProps)(PrintUser);