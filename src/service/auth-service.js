// eslint-disable-next-line
import React, {Component} from 'react';

class AuthService extends Component {
  #apiUrl = 'http://authapi/api/oauth/token';

  setLogin = async (email, password) => {
    const query = {
      email: email,
      password: password
    };
    const res = await fetch(this.#apiUrl, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Headers': 'authorization',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(query)
    });
    if (!res.ok) throw new Error(`Could not fetch data to ${this.#apiUrl}`);
    return await res.json();
  }
}

export const authService = new AuthService();
