import React, {Component} from 'react';
import Login from '../../components/Login';
import {AUTH_TOKEN, REMEMBER_ME} from '../../constants/loginAuthConst';
import routes from '../../constants/routes';
import {authService} from '../../service/auth-service';

class LoginPage extends Component {
  state = {
    token: '',
    rememberFlag: false,
    email: '',
    password: '',
  };

  setTokenToLocal = (idToken) => {
    localStorage.setItem(AUTH_TOKEN, idToken);
  };

  setTokenToSession = (idToken) => {
    sessionStorage.setItem(AUTH_TOKEN, idToken);
  };

  setEmail = (email) => {
    this.setState({email: email});
  };

  setPassword = (pass) => {
    this.setState({password: pass});
  };

  handleLogin = () => {
    const {email, password} = this.state;
    if (email && password) {
      authService.setLogin(email, password)
        .then(res => {
          const rememberMe = localStorage.getItem(REMEMBER_ME);
          if (res.accessToken && rememberMe) {
            this.setTokenToLocal(res.accessToken);
          } else if (res.accessToken && !rememberMe) {
            this.setTokenToSession(res.accessToken);
          }
          this.props.history.push(routes.HOME)
        })
      .catch(err => console.error(err))
    }
  };

  setRememberMe = () => {
    const {rememberFlag} = this.state;
    this.setState({rememberFlag: !rememberFlag}, () => {
      localStorage.setItem(REMEMBER_ME, this.state.rememberFlag);
    });
  };

  componentDidMount() {
    const {history} = this.props;
    const rememberMe = localStorage.getItem(REMEMBER_ME);
    if (rememberMe) history.push(routes.HOME);
  };
  render() {
    return(
        <Login
          setRememberMe={this.setRememberMe}
          setEmail={this.setEmail}
          setPassword={this.setPassword}
          handleLogin={this.handleLogin}
        />
    )
  }
}

export default LoginPage;
