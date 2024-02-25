import React, { Component } from "react";
import Fade, { Slide } from "react-reveal";
// import WhatsAppWidget from 'react-whatsapp-widget';
import WhatsAppWidget from 'react-whatsapp-widget'
import ReactWhatsapp from 'react-whatsapp';
import { FaWhatsappSquare,FaInstagramSquare,FaFacebookSquare } from "react-icons/fa"
// import "react-fa-icon";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/logo.jpg";
    const bio = 'Welcome to our Waste Management Hub, your go-to platform for all things waste-related. Our services include scrap collection, fostering a zero-waste society, efficient waste management, and providing clear segregation guidelines with the assistance of our trained Safai Sathis. Additionally, we offer manpower solutions for proper waste management, as well as vehicle scrapping and dismantling services. Join us in creating a cleaner, greener, and more sustainable environment.';
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    // const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
            <Fade left duration={1000}>
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
              </Fade>
            </div>
            <div className="nine columns main-col">
              <h2>About us</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>Contact Us now via</span>
                    <br />
                    {/* <span> */}
                    {/* <ReactWhatsapp number="919619985663" message="Hello World!!!" /> */}
                    <a
        href="https://wa.me/+919653257899"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <FaWhatsappSquare style={{height:50,width:50}} />
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <a
       href="https://www.instagram.com/zerowastemanagement2"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <FaInstagramSquare style={{height:50,width:50}} />
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
      <a
        href="https://wa.me/+919653257899"
        className="whatsapp_float"
        target="_blank"
        rel="noopener noreferrer"
      >
       <FaFacebookSquare style={{height:50,width:50}} />
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
                    {/* <WhatsAppWidget phoneNumber="9619985663" message="Hello, this is my message!" /> */}
                    {/* <ah>
                    WhatsApp Us Now */}
                    {/* </a> */}
                      {/* {street} */}
                      {/* <br /> */}

                      {/* {city} {state}, {zip} */}
                    {/* </span> */}
                    <br />
                    <span>+91 96532 57899</span>
                    <br />
                    <span>zerowaste470@gmail.com</span>
                  </p>
                </div>
                {/* <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
