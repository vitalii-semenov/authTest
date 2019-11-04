import React from 'react';
import './Login.scss';

const Login = (props) => {
  const {setRememberMe, setEmail, setPassword, handleLogin} = props;
  return (
      <div className="mainContent container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <form>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control"
                       id="InputEmail"
                       aria-describedby="emailHelp" placeholder="Enter email"
                       onInput={e => setEmail(e.target.value)}
                />
                <small id="emailHelp" className="form-text text-muted">We'll
                  never
                  share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input type="password" className="form-control"
                       id="InputPassword" placeholder="Password"
                       onInput={e => setPassword(e.target.value)}
                />
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input"
                       id="exampleCheck" onClick={() => setRememberMe()}/>
                <label className="form-check-label" htmlFor="exampleCheck">Check
                  me out</label>
              </div>
              <button type="button" onClick={handleLogin} className="btn btn-outline-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;
