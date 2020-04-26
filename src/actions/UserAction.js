import {apiEndPoint} from '../constants/apiEndPoints';
import RequestServices from '../services/RequestServices';
import axios from 'axios';
import LoaderAction from './LoaderAction';

class UserAction {

  static setUserData (data){
    return ({
      type: "SET_USER",
      payload: data
    })
  }

  static addUserData (data){
    return {
      type: "ADD_USER",
      payload: data
    }
  }

  static deleteUserData (data){
    return {
      type: "DELETE_USER",
      payload: data
    }
  }
  static updateUserData(data){
    return {
      type: "UPDATE_USER",
      payload: data
    }
  }

  static getAllUser (){
    return (dispatch) => {
      dispatch(LoaderAction.showLoader(true));
      const url = apiEndPoint.GET_ALL_USER;
      return RequestServices.fetch(url)
      .then(res => {
        dispatch(UserAction.setUserData(res.data))
        dispatch(LoaderAction.hideLoader(false));
          return res.data;
        }
      )
      .catch(err => console.log(err))
    }
  }

  // static addNewUser (data){
  //   return (dispatch) => {
  //     const url = apiEndPoint.ADD_NEW_USER;
  //     return RequestServices.save(url, data)
  //     .then(res => {
  //       dispatch(UserAction.addUserData(res.data))
  //         return res;
  //       }
  //     )
  //     .catch(err => console.log(err))
  //   }
  // }

  static addNewUser (data){
    return (dispatch) => {
      dispatch(LoaderAction.showLoader(true));
      const url = apiEndPoint.ADD_NEW_USER;
      return axios.post(url, data)
      .then(res => {
          dispatch(UserAction.addUserData(res.data))
          dispatch(LoaderAction.hideLoader(false));
          return res;
        }
      )
      .catch(err => console.log(err))
    }
  }

  static deleteUser (userId){
    return (dispatch) => {
      dispatch(LoaderAction.showLoader(true));
      const url = apiEndPoint.DELETE_USER(userId);
      return RequestServices.delete(url)
      .then(res => {
          dispatch(UserAction.deleteUserData(userId))
          dispatch(LoaderAction.hideLoader(false));
          return res;
        }
      )
      .catch(err => console.log(err))
    }
  }

  static updateUser(userData){
    return (dispatch) => {
      dispatch(LoaderAction.showLoader(true));
      const url = apiEndPoint.UPDATE_USER(userData.id);
      return RequestServices.update(url, userData)
      .then(res => {
        dispatch(UserAction.updateUserData(userData))
        dispatch(LoaderAction.hideLoader(false));
          return res;
        }
      )
      .catch(err => console.log(err))
    }
  }
  
  static getUser (userId){
    return (dispatch) => {
      dispatch(LoaderAction.showLoader(true));
      const url = apiEndPoint.GET_INDIVIDUAL_USER(userId);
      return RequestServices.get(url)
      .then(res => {
          dispatch(LoaderAction.hideLoader(false));
          return res;
        }
      )
      .catch(err => console.log(err))
    }
  }
}

export default UserAction;
