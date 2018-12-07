import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrintUser from './PrintUser';
import userAction from '../action/userActions'

class User extends Component {
  formValidator = () => {
    let name = document.querySelector('#userName').value, age = document.querySelector('#userAge').value, nation = document.querySelector('#userNation').value;
    this.props.onFormSend({ 'name':name, 'age':age, 'nation':nation })
  }
  render() {
    return (
      <div className='form'>
        <div>
          <table>
            <tbody>
              <tr><td>Name:</td><td><input type='text' id='userName'/></td></tr>
              <tr><td>Age:</td><td><input type='text' id='userAge'/></td></tr>
              <tr><td>Nationality:</td><td><input type='text' id='userNation'/></td></tr>
            </tbody>
          </table>
        </div>
        <div>
          <button type='submit' onClick={this.formValidator}>SEND</button>
        </div>
        <PrintUser name={this.props.name} age={this.props.age} nation={this.props.nation} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    name: state.user.name,
    age: state.user.age,
    nation: state.user.nation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onFormSend: (payload) => dispatch( userAction(payload) )
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(User);