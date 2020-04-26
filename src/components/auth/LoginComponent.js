import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {session} from '../../services/Session';
import {withRouter} from 'react-router-dom';
import '../../styles/Login.scss';

class LoginComponent extends Component {
  constructor(){
    super();
    this.responseGoogle = this.responseGoogle.bind(this);
    this.isLoggedIn = session.isLoggedIn();
  }

  responseGoogle(res){
    console.log(res);
    session.setLoggedIn(res.accessToken)
    session.isLoggedIn() && this.negivateToUserDashboard()
  }

  handleError = (error) => {
    console.log(error);
  }

  negivateToUserDashboard = () => {
    this.props.history.push('/users')
  }

  render() {
    return (
      <div className="loginContainer" >
        {session.isLoggedIn()? this.negivateToUserDashboard() : 
          <GoogleLogin
            clientId="724459850744-vmukonfvd109dv358l0h922dlilaj303.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={this.responseGoogle}
            onFailure={this.handleError}
            cookiePolicy={'single_host_origin'}
          />
        }
      </div>
    )
  }
}

export default withRouter(LoginComponent);
