import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import userSlice from '../store/user'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

import BCR_login from '.././Assets/bcr_login.svg'
import styled from 'styled-components'

const Register = () => {

  const { register, handleSubmit, formState } = useForm()

  const [regStatus, setRegStatus] = useState({
    success: false,
    message: ''
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const formSubmitHandler = (data) => {
    // proses regist
    const postData = {
      email: data.user_email,
      password: data.user_password,
      firstname: data.user_firstname,
      lastname: data.user_lastname,
      isAdmin: false
    }

    axios.post('http://localhost:4000/register', postData)
    .then( res=> {
      if ( typeof res.data.accessToken !== 'undefined' ) {
        // menyimpan token di localstorage
        localStorage.setItem('bcrUserAccessToken', res.data.accessToken)

        // menyimpan user di redux store
        const user = jwtDecode(res.data.accessToken)
        axios.get(`http://localhost:4000/users/${user.sub}`)
        .then( res => {
            dispatch( userSlice.actions.addUser({userData: res.data}) )
            navigate('/login')
        })
      }
    }).catch( err => {
      setRegStatus({
        success: false,
        message: 'Sorry, something is wrong. Please try again later'
      })
    })
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
          <div class="col login-form">
            <div class="logo-panjang"></div>
            <h1>Create new Account</h1>
            { ( !regStatus.success && regStatus.message ) && <p className="requirement mt-2">{regStatus.message}</p> }
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
              <div class="form-group">
                <label htmlFor="firstname">First Name</label>
                <input type="firstname" class="form-control" name="firstname" id="firstname" placeholder="Your First Name" {...register('user_firstname', {required: true})} autoComplete="true" />
                <p class="requirement">{formState.errors.user_firstname?.type === 'required' && "First name is required"}</p>
              </div>
              <div class="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input type="lastname" class="form-control" name="lastname" id="lastname" placeholder="Your Last Name" {...register('user_lastname', {required: true})} autoComplete="true" />
                <p class="requirement">{formState.errors.user_lastname?.type === 'required' && "Last name is required"}</p>
              </div>
              <button type="submit" class="btn btn-enter text-center">Sign Up</button>
            </form>
            <p class="register mt-2">Already have an accout? <Link to="/login">Login Now</Link></p>
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

export default Register