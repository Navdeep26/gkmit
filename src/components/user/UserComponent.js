import React, { Component } from 'react';
import User from './User';
import {connect} from 'react-redux';
import UserAction from '../../actions/UserAction';
import appConstants from '../../constants/appConstants'
import CommonMethods from '../../utils/commonMethod';
import '../../styles/Common.scss';
import '../../styles/User.scss';
import LoaderComponent from '../LoaderComponent';

class UserComponent extends Component {

  componentDidMount(){
    this.props.allUser.length === 0 && this.props.getAllUser().then(data => console.log(data));
  }

  nevigateToAddUser = () => {
    const url = appConstants.USER.add_user;
    this.props.history.push(url)
  }

  editUserDetail = (userId) => {
    const url = CommonMethods.getUserEditUrl(userId)
    this.props.history.push(url)
  }

  deleteUserDetail = (userId) => {
    if (window.confirm('Are you sure you want to delete this user?')){
      this.props.deleteUser(userId)
    }
  }

  render() {
    const {loader} = this.props;
    return (
      <div className="container parentContainer" >
        {loader ? <LoaderComponent/> : 
        <div className="bodyWrapper" >
          <User 
            allUserData={this.props.allUser}
            nevigateToAddUser={this.nevigateToAddUser}
            editUserDetail={this.editUserDetail}
            deleteUserDetail={this.deleteUserDetail}
          />
        </div>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  allUser: state.UserReducer.allUser,
  loader: state.LoaderReducer.loader
})


const mapDispatchToProps = {
  getAllUser : UserAction.getAllUser,
  deleteUser : UserAction.deleteUser,
}

export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);