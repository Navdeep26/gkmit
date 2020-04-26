import React from 'react';
import {Route, Switch} from 'react-router-dom';
import BaseRoute from '../high-order/BaseRoute';
import LoginComponent from '../components/auth/LoginComponent';
import UserComponent from '../components/user/UserComponent';
import AddUserComponent from '../components/user/AddUserComponent';
import LogoutComponent from '../components/auth/LogoutComponent'
import EditUserComponent from '../components/user/EditUserComponent';
import { session } from '../services/Session';
import {withRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';

class ApplicationRoute extends React.Component {

    logOutUser =() => {
      session.setloggedOut();
      this.props.history.push("/login")
    }
    render() {
      return (
        <React.Fragment>
          {session.isLoggedIn() && 
          <div className="header" >
            <div className="wrapper" >
              <Link style={{"padding": "20px"}} to="/users" >Users</Link>
              <Link onClick={this.logOutUser} ><span class="fa-user"></span>Logout</Link>
            </div>
          </div> }
          <Switch>
              <Route exact path='/' component={LoginComponent} />
              <Route exact path='/login' component={LoginComponent} />
              <BaseRoute exact path='/users' component={UserComponent} />
              <BaseRoute exact path='/logout' component={LogoutComponent} />
              <BaseRoute exact path='/user/addUser' component={AddUserComponent} />
              <BaseRoute exact path='/user/:id/edit' component={EditUserComponent} />
              <Route path='*' exact={true}  render={() => <div>Not Found</div> }   />
          </Switch>
      </React.Fragment>
      );
    }
}


export default withRouter(ApplicationRoute);
