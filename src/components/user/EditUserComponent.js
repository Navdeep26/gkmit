import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserAction from '../../actions/UserAction';
import AddUser from './AddUser';
import LoaderComponent from '../LoaderComponent';

class EditUserComponent extends Component {
  constructor(){
    super();
    this.state = {
      user : "",
      stepper: true,
    }
  }

  componentDidMount(){
    const userId = this.props.match.params.id;
    this.getUserById(userId)
  }

  getUserById = (id) => {
    // const url = apiEndPoint.GET_INDIVIDUAL_USER(id)
    // RequestServices.get(url).then(res => this.onSucess(res.data))
    this.props.getUser(id).then(res => this.onSucess(res.data))
  }

  onSucess(userDetail){
    const {id, name, phone,email, username, website, company :{bs,catchPhrase}, address :{city, street, suite, zipcode}} = userDetail;
    const fromData = {
      id,
      name,
      phone,
      username,
      email,
      website,
      city,
      street,
      suite,
      zipcode,
      bs,
      catchPhrase,
      companyName : userDetail.company.name
    };
    this.setState ({
      user : fromData,
    })
  }

  handleAddUserForm = (event) => {
    let newUser = {...this.state.user}
    newUser[event.target.name] = event.target.value;
    this.setState({
      user : newUser
    })
  }

  submitUserInfo = (event) => {
    const {id,name,username,email,street, suite, city, zipcode,  phone, website, companyName,catchPhrase, bs } = this.state.user;
    event.preventDefault();
    const formData = {
      id,
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
    this.props.updateUser(formData).then(res => {
      this.props.history.push("/users")
    });
  }

  toggleStepperForm = (event) => {
    debugger
    event.stopPropagation();
    this.setState({
      stepper: !this.state.stepper
    })
  }

  render() {
    const {loader} = this.props;
    const {stepper} = this.state;
    return (
      <div className="container parentContainer" >
        {loader ? <LoaderComponent/> : 
        <div className="bodyWrapper" >
          <AddUser 
            handleAddUserForm = {this.handleAddUserForm}
            formData={this.state.user}
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

const mapStateToProps = (state) => ({
  loader: state.LoaderReducer.loader
})

const mapDispatchToProps = {
  updateUser : UserAction.updateUser,
  getUser: UserAction.getUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(EditUserComponent);
