import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Components/Admin/Navbar'
import Sidebar from '../Components/Admin/Sidebar'

import styled from 'styled-components'

const Dashboard = () => {
  return (
    <DashboardPage>
      <Navbar/>
      <Section>
        <Sidebar/>
        <div className="main">
          <h1 className="title">Welcome to Admin Page</h1>
          <Link to="/login" className="btn-logout">Logout</Link>
        </div>
      </Section>
    </DashboardPage>
  )
}

const DashboardPage = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #F4F5F7;
`

const Section = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
  .main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-top: 50px;
    .title {
      font-size: 24pt;
      font-weight: 700;
      color: #0D28A6;
    }
    .btn-logout {
      background-color: #0D28A6;
      color: white;
      width: 100px;
      padding: 10px;
      text-align: center;
      text-decoration: none;
      &:hover {
        text-decoration: none;
      }
    }
  }
  
`

export default Dashboard