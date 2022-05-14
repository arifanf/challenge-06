import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import userSlice from '../store/user'
import axios from 'axios'
import jwtDecode from 'jwt-decode'
import GoogleLogin from 'react-google-login'

import BCR_login from '.././Assets/bcr_login.svg'
import styled from 'styled-components'

const Login = () => {

  const { register, handleSubmit, formState } = useForm()

  const [loginStatus, setLoginStatus] = useState({
    success: false,
    message: ''
})

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmitHandler = (data) => {
    // proses login
    const postData = {
      email: data.user_email,
      password: data.user_password,
      firstname: data.user_firstname,
      lastname: data.user_lastname
    }

    axios.post('http://localhost:4000/login', postData)
    .then( res=> {
        if ( typeof res.data.accessToken !== 'undefined' ) {
          // menyimpan token di localstorage
          localStorage.setItem('bcrUserAccessToken', res.data.accessToken)

          // menyimpan user di redux store
          const user = jwtDecode(res.data.accessToken)
          axios.get(`http://localhost:4000/users/${user.sub}`)
          .then( res => {
            dispatch( userSlice.actions.addUser( {userData: res.data}) )
            if (res.data.isAdmin) {
              navigate('/dashboard')
            } else {
              navigate('/')
            }
          })
        }
    }).catch( err => {
        setLoginStatus({
          success: false,
          message: 'Sorry, something is wrong. Please try again later'
        })
    })
  }

  const responseSuccess = (res) => {
    console.log(res)
  }

  const responseFailed = (res) => {
    console.log(res)
  }

  return (
    <Section>
      <div class="login-container d-flex">
        <div class="col-6 p-0 img-side">
          <div class="login-img">
              <img src={BCR_login} alt="" className="img-car" />
          </div>
        </div>

        <div class="col-6 form-side">
          <div class="login-form">
            <div class="logo-panjang"></div>
            <h1>Welcome, Admin BCR</h1>
            { ( !loginStatus.success && loginStatus.message ) && <p className="requirement mt-2">{loginStatus.message}</p> }
            <form onSubmit={ handleSubmit(formSubmitHandler) }>
              <div class="form-group">
                <label htmlFor="username">Email</label>
                <input type="text" class="form-control" name="username" id="username" placeholder="Example: johndee@gmail.com" {...register('user_email', {required: true})} autocomplete="true" />
                <p class="requirement">{formState.errors.user_email?.type === 'required' && "Email is required"}</p>
              </div>
              <div class="form-group">
                <label htmlFor="user_password">Password</label>
                <input type="password" class="form-control" name="user_password" id="password" placeholder="6+ characters" {...register('user_password',  {required: true})} autoComplete="true" />
                <p class="requirement">{formState.errors.user_email?.type === 'required' && "Email is required"}</p>
              </div>
              <button type="submit" class="btn btn-enter text-center">Sign In</button>
            </form>
            <p class="register mt-2 mb-5">Don't have an account? <Link to="/register">Register Here</Link></p>
            <GoogleLogin
              clientId="547625838498-ipttddpf985fa7gksm8qsiie11295r48.apps.googleusercontent.com"
              buttonText="Login with Google"
              onSuccess={responseSuccess}
              onFailure={responseFailed}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}

const Section = styled.div`
  background-color: #0D28A6;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  .login-container .img-car {
    height: auto;
    width: 135%;
    opacity: 0.7;
    transform: translateY(-5%);
  }
  .login-container h1 {
    margin: 32px 0;
    font-size: 32px;
    font-weight: 700;
  }
  .login-container .login-form {
    width: 480px;
    height: 100vh;
    background-color: #F4F5F7;
    padding: 0 45px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    z-index: 999;
    right: 0;
  }
  .requirement {
    color: red;
    font-style: italic;
    font-size: 12px;
    margin-top: 5px;
  }
  .logo-panjang {
    display: block;
    position: relative;
    width: 100px;
    height: 34px;
    background-color: #CFD4ED;
    margin-right: 30px;
  }
  .form-side .alert {
    font-size: 14px;
  }
  .form-side .form-group {
    columns: #222;
  }
  .form-side .form-control {
    font-size: 14px;
    color: #A5A5A5;
    border: 1px solid #A5A5A5;
    &:focus {
      box-shadow: none;
      color: #222;
    }
  }
  .form-side .btn-enter {
    width: 100%;
    background-color: #0D28A6;
    color: #FFF;
    font-size: 16px;
    font-weight: 700;
  }
  .form-side .register {
    font-size: 14px;
    color: #A5A5A5;
    a {
      color: #0D28A6;
      text-decoration: none;
    }    
  }
`

export default Login