import React from 'react'

import Instagram from '../../Assets/icon_instagram.svg'
import Facebook from '../../Assets/icon_facebook.svg'
import Twitter from '../../Assets/icon_twitter.svg'
import Mail from '../../Assets/icon_mail.svg'
import Twitch from '../../Assets/icon_twitch.svg'

import styled from 'styled-components'

const Footer = () => {
  return (
    <Section>
        <div className="footer-section-container">
            <div className='footer-section-first'>
                <div className="footer-text">
                    Jalan Suroyo No. 161 Mayangan Kota Probolinggo 672000
                </div>
                <div className="footer-text">
                    binarcarrental@gmail.com
                </div>
                <div className="footer-text">
                    081-233-334-808
                </div>
            </div>
            <div className='footer-section-second'>
                <a href="#OurServices" className="section-second-footer-text">
                    Our Services
                </a>
                <a href="#WhyUs" className="section-second-footer-text">
                    Why Us
                </a>
                <a href="#Testimonial" className="section-second-footer-text">
                    Testimonial
                </a>
                <a href="#FAQ" className="section-second-footer-text">
                    FAQ
                </a>
            </div>
            <div className='footer-section-third'>
                <div className="footer-text">
                    Connect with us
                </div>
                <div className="blue-icon">
                    <img src={Facebook} className="icon-socmed" alt="" />
                    <img src={Instagram} className="icon-socmed" alt="" />
                    <img src={Twitter} className="icon-socmed" alt="" />
                    <img src={Mail} className="icon-socmed" alt="" />
                    <img src={Twitch} className="icon-socmed" alt="" />
                </div>
            </div>
            <div className='footer-section-fourth'>
                <div className="footer-text">
                    Copyright Binar 2022
                </div>
                <div className="blue-box">
                    
                </div>
            </div>
        </div>
    </Section>
  )
}

const Section = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 50px;
    margin-bottom: 50px;
    .footer-section-container{
    width: 85%;
    display: flex;
    flex-direction: row;
    }
    .footer-section-first{
        width: 30%;
        margin-right: 5%;
    }
    .footer-section-second{
        width: 15%;
        display: flex;
        flex-direction: column;
    }
    .footer-section-third{
        width: 30%;
    }
    .footer-section-fourth{
        width: 20%;
        overflow: hidden;
    }
    .blue-box{
        height: 35px;
        width: 110px;
        margin-top: 10px;
        background-color: #0D28A6;
    }
    .footer-text{
        font-size: 16px;
        margin-bottom: 10px;
    }
    .section-second-footer-text{
        font-size: 16px;
        margin-bottom: 10px;
        text-decoration: none;
        color: black;
    }
    .section-second-footer-text:hover {
        text-decoration: none;
        color: black;
    }
    .blue-icon{
        display: flex;
        flex-wrap: wrap;
    }
    .icon-socmed{
        margin: 5px 10px;
    }
    @media screen and (max-width: 1024px){
        .footer-text{
            font-size: 14px;
        }

        .section-second-footer-text{
            font-size: 14px;
        }
    }
    @media screen and (max-width: 575px){
        .footer-section-container{
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .footer-section-first{
            width: 100%;
        }
        .footer-section-second{
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin: 20px 0px;
        }
        .footer-section-third{
            width: 100%;
        }
        
        .footer-section-fourth{
            width: 100%;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .section-second-footer-text{
            font-size: 14px;
            margin: 0px 5px;
        }
        .blue-icon{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: 0px 0px 20px 0px;
        }
        .blue-box{
            margin-bottom: 20px;
        }
    }
`

export default Footer