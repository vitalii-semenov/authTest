import React, {Component} from 'react';
import Login from '../../components/Login';
import {AUTH_TOKEN, REMEMBER_ME} from '../../constants/loginAuthConst';
import routes from '../../constants/routes'

class LoginPage extends Component {
  state = {
    token: '',
    rememberFlag: false,
  };

  setToken = (idToken) => {
    localStorage.setItem(AUTH_TOKEN, idToken);
  };

  setRememberMe = () => {
    const {rememberFlag} = this.state;
    this.setState({rememberFlag: !rememberFlag}, () => {
      localStorage.setItem(REMEMBER_ME, this.state.rememberFlag);
    });
  };

  isLogin = () => {
    const token = localStorage.getItem(AUTH_TOKEN);
    return !!token;
  };

  componentDidMount() {
    const {history} = this.props;
    const rememberMe = localStorage.getItem(REMEMBER_ME);
    if (this.isLogin() && rememberMe) history.push(routes.HOME);
  };
  render() {
    return(
        <Login setRememberMe={this.setRememberMe}/>
    )
  }
}

export default LoginPage;