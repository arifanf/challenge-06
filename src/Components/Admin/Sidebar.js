import React from 'react'

import styled from 'styled-components'

const Sidebar = () => {
  return (
    <SideMenu>
      <div class="col-auto">
        <div class="left-side">
          <div class="side-menu__title">
            <h5>CARS</h5>
          </div>
          <div class="side-menu__link">
            <a href="/dashboard">List Car</a>
          </div>
        </div>
    </div>
    </SideMenu>
  )
}

const SideMenu = styled.div`
  padding-top: 24px;
  height: 100vh;
  width: 220px;
  background-color: #FFF;
  position: fixed;
  z-index: 1;
  .side-menu__title {
    display: block;
    padding: 10px 0;
    h5 {
      padding-left: 25px;
      font-size: 16px;
      font-weight: 700;
      color: #8A8A8A;
      line-height: 18px;
    }
  }
`

export default Sidebar