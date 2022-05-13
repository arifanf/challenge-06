import React from 'react'
import { Link } from 'react-router-dom'

import BurgerMenu from '../../Assets/icon_menu.svg'
import Search from '../../Assets/icon_search.svg'
import DropDown from '../../Assets/icon_chevron-down.svg'
import ProfilePic from '../../Assets/profile.svg'
import styled from 'styled-components'

const Navbar = () => {
  return (
    <Header>
        <div class="container-fluid">
            <div class="row">
                <div class="col-auto">
                    <div class="d-flex align-items-center">
                        <div class="col">
                            <div class="logo-panjang"></div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="d-flex">
                        <div class="col-auto">
                            <Link to="/dashboard" class="menu-btn">
                                <img src={BurgerMenu} className="bx-menu" alt="" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div class="col-auto">
                <div class="d-flex align-items-center">
                    <div class="col-auto">
                        <div class="d-flex align-items-center">
                            <form class="search-form d-flex align-items-center">
                                <img src={Search} className="bx-search" alt="" />
                                <input type="text" placeholder="Search" class="search-input" title="Enter search keyword" />
                            </form>
                            <button type="submit" title="Search" className="search-btn ml-1">Search</button>
                        </div>
                    </div>

                    <div class="col-auto">
                        <div class="row">
                            <div class="user-img">
                                <img src={ProfilePic} className="ml-5 mr-2" alt="" />
                            </div>
                            <div class="user-name d-flex align-items-center justify-content-center">
                                <span class="uname">Unis Badri</span>
                            </div>
                            <div class="user-menu d-flex align-items-center justify-content-center">
                                <div class="user-menu__dropdown">
                                    <button class="btn menu-btn" type="button" id="dropdown-menu" data-toggle="dropdown" aria-expanded="false">
                                        <img src={DropDown} alt="" />
                                    </button>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdown-menu">
                                        <button class="dropdown-item" type="button">Profile</button>
                                        <button class="dropdown-item" type="button">Setting</button>

                                        <form action="/logout" method="POST">
                                            <button class="dropdown-item" type="submit">Logout</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            </div>
        </div>
    </Header>
  )
}

const Header = styled.div`
    width: 100vw;
    z-index: 99;
    top: 0;
    transition: all 0.5s;
    padding: 18px 0;
    height: 70px;
    box-shadow: 0px 2px 20px rgba(1, 41, 112, 0.1);
    background-color: #FFF;
    padding-left: 70px;
    .logo-panjang {
        display: block;
        position: relative;
        width: 100px;
        height: 34px;
        background-color: #CFD4ED;
        margin-right: 30px;
    }
    .search-form {
        width: 100%;
        border: 1px solid rgba(208, 208, 208, 1);
        border-radius: 2px 0 0 2px;
        position: relative;
    }
    .search-input { 
        padding-left: 30px;
        padding-top: 10px;
        padding-bottom: 10px;
        font-size: 16px;
        line-height: 18px;
        color: var(--primary-blue-1);
        transition: 0.3s;
        width: 100%;
        border: 0;
        outline: 0;
    }
    .bx-search {
        padding: 0 5px;
        font-size: 24px;
        color: #D0D0D0;
        position: absolute;
    }
    .search-btn {
        background-color: #FFF;
        color: #0D28A6;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        padding: 10px;
        border: 1px solid #0D28A6;
        border-radius: 0 2px 2px 0;
        position: relative;
    }
`

export default Navbar