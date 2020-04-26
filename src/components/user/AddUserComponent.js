import React, { Component } from 'react';
import AddUser from './AddUser.js';
import {connect} from 'react-redux';
import UserAction from '../../actions/UserAction';
import '../../styles/AddUser.scss';
import '../../styles/Common.scss';
import LoaderComponent from '../LoaderComponent';

class AddUserComponent extends Component {
  constructor(){
    super();
    this.state = {
      user : {
        name : "",
        username : "",
        email: "",
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        phone : "",
        website: "",
        companyName : "",
        catchPhrase: "",
        bs: "",
      },
      stepper: true
    }
  }

  handleAddUserForm = (event) => {
    let newUser = {...this.state.user}
    newUser[event.target.name] = event.target.value;
    this.setState({
      user : newUser
    })
  }

  submitUserInfo = (event) => {
    const {name,username,email,street, suite, city, zipcode,  phone, website, companyName,catchPhrase, bs } = this.state.user;
    event.preventDefault();
    const formData = {
      name,
      username, 
      email,
      address : {
        street,
        suite,
        city,
        zipcode,
      },
      phone,
      website,
      company : {
        name: companyName,
        catchPhrase,
        bs
      }
    }
    this.props.addNewUser(formData).then(res => {
      this.props.history.push("/users")
    });
  }

  toggleStepperForm = (event) => {
      this.setState({
        stepper: !this.state.stepper
      })
  }

  render() {
    const {stepper, user}= this.state;
    const {loader} = this.props;
    return (
      <div className="container parentContainer" >
        {loader ? <LoaderComponent/> : 
          <div className="bodyWrapper" >
            <AddUser 
              handleAddUserForm = {this.handleAddUserForm}
              formData={user}
              submitUserInfo={this.submitUserInfo}
              stepper={stepper}
              toggleStepperForm={this.toggleStepperForm}
            />
          </div>
        }
      </div>
    )
  }
}

const mapDispatchToProps = {
  addNewUser : UserAction.addNewUser,
}

const mapStateToProps = (state) => ({
  loader: state.LoaderReducer.loader
})

export default connect(mapStateToProps,mapDispatchToProps)(AddUserComponent);