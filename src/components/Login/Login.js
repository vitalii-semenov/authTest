import React from 'react';
import './Login.scss';

const Login = (props) => {
  const {setRememberMe} = props;
  return (
      <div className="container mt-5">
        <div className="row justify-content-center align-items-center">
          <div className="col-4">
            <form>
              <div className="form-group">
                <label htmlFor="InputEmail">Email address</label>
                <input type="email" className="form-control"
                       id="InputEmail"
                       aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" className="form-text text-muted">We'll
                  never
                  share your email with anyone else.
                </small>
              </div>
              <div className="form-group">
                <label htmlFor="InputPassword">Password</label>
                <input type="password" className="form-control"
                       id="InputPassword" placeholder="Password"/>
              </div>
              <div className="form-group form-check">
                <input type="checkbox" className="form-check-input"
                       id="exampleCheck" onClick={() => setRememberMe()}/>
                <label className="form-check-label" htmlFor="exampleCheck">Check
                  me out</label>
              </div>
              <button type="button" className="btn btn-outline-secondary">Submit</button>
            </form>
          </div>
        </div>
      </div>
  );
};

export default Login;