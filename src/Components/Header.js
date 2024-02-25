import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import { Outlet, Link } from "react-router-dom";
import { FaPhoneSquare,FaRupeeSign } from 'react-icons/fa';

class Header extends Component {
  render() {
    const handleCall = () => {
      window.location.href = `tel:${'+919619985663'}`;
    };
  
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;

    return (
      <header id="home">
        <ParticlesBg type='circle' color="#67a440" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>
          <img
          style={{height:45,width:80,position:"absolute",top:0,left:10,borderRadius:20,margin:1}}
                // className="profile-pic"
                src={'images/logo.jpg'}
                alt="Nordic Giant Profile Pic"
              />
          <ul id="nav" className="nav">
          {/* <li className="current">
          <img
          style={{height:100,width:100}}
                // className="profile-pic"
                src={'images/logo.jpg'}
                alt="Nordic Giant Profile Pic"
              />
              </li> */}
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

          

            <li>
              <a className="smoothscroll" href="#resume">
                Services
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio">
                Works
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
            <li>
            {/* Use the Link component to navigate to the Price page */}
            <Link to="/price">Price</Link>
          </li>
          </ul>
        </nav>

        <div className="row banner">
       

            
         
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Zero Waste</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>Embrace the future, live waste free, where every choice counts, and every action echoes in the harmony of a zero waste symphony.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">
                <a onClick={handleCall} className="button btn project-btn">
                <FaPhoneSquare size={25} />  Call us
                </a>
                {/* <a  className="button btn github-btn"> */}
                <Link className="button btn github-btn" to="/price"><FaRupeeSign size={25}/> Price</Link>
                {/* </a> */}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
