// Write your JS code here
import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component {
  onClickLoginButton = () => {
    this.getData()
  }

  submitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  getData = async () => {
    const url = 'https://apis.ccbp.in/login'
    const username = 'rahul'
    const password = 'rahul@2021'
    const options = {
      method: 'POST',
      body: JSON.stringify({
        username,
        password,
      }),
    }
    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      this.submitSuccess(data.jwt_token)
    }
  }

  render() {
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="home">
        <h1>Please Login</h1>
        <button type="button" onClick={this.onClickLoginButton}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default Login
