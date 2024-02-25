import React, { Component } from "react";
import { Fade, Slide } from "react-reveal";
import axios from 'axios';
// import { faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa'

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      message: '',
    };


    
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/contact', this.state);
      console.log('Contact form submitted successfully!', response.data.message);
      if(response.data.message=='Contact form submitted successfully!'){
        
        alert('Thank you for contacting us, we will be contacting you soon')
      }
    } catch (error) {
      alert('error')
      console.error('Error submitting contact form:', error.message);
    }
  };
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const message = this.props.data.contactmessage;

  
  


    return (
      <section id="contact">
        <Fade bottom duration={1000}>
          <div className="row section-head">
            <div className="two columns header-col">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </div>

            <div className="ten columns">
              <p style={{fontSize:50}} className="lead">Get in touch with us</p>
            </div>
          </div>
        </Fade>

        <div className="row">
          <Slide left duration={1000}>
            <div className="eight columns">
              <form onSubmit={this.handleSubmit} >
                <fieldset>
                  <div>
                    <label htmlFor="contactName">
                      Name <span className="required">*</span>
                    </label>
                    <input
                    type="text" name="name" value={this.state.name} onChange={this.handleChange}
                      // type="text"
                      defaultValue=""
                      size="35"
                      id="contactName"
                      // name="contactName"
                      // onChange={this.handleChange}
                    />
                  </div>

                  <div>
                    <label htmlFor="contactEmail">
                      Email <span className="required">*</span>
                    </label>
                    <input
                    type="text" name="email" value={this.state.email} onChange={this.handleChange}
                      // type="text"
                      defaultValue=""
                      size="35"
                      id="contactEmail"
                      // name="contactEmail"
                      // onChange={this.handleChange}
                    />
                  </div>

                  {/* <div>
                    <label htmlFor="contactSubject">Subject</label>
                    <input
                      type="text"
                      defaultValue=""
                      size="35"
                      id="contactSubject"
                      name="contactSubject"
                      onChange={this.handleChange}
                    />
                  </div> */}

                  <div>
                    <label htmlFor="contactMessage">
                      Message <span className="required">*</span>
                    </label>
                    <textarea
                     name="message" value={this.state.message} onChange={this.handleChange}
                      cols="50"
                      rows="15"
                      id="contactMessage"
                      // name="contactMessage"
                    ></textarea>
                  </div>

                  <div>
                    <button className="submit">Submit</button>
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  </div>
                </fieldset>
              </form>

              <div id="message-warning"> Error boy</div>
              <div id="message-success">
                <i className="fa fa-check"></i>Your message was sent, thank you!
                <br />
              </div>
            </div>
          </Slide>

          <Slide right duration={1000}>
            <aside className="four columns footer-widgets">
              <div className="widget widget_contact">
                <h4>Address and Phone</h4>
                <p className="address">
                  Zero waste
                  <br />
                  kurla West <br />
                  Mumbai, Maharashtra 400 074
                  <br />
                  <span>+91 72087 91771</span><br />
                  <span>+91 96532 57899</span>

                </p>
              </div>

              {/* <div className="widget widget_tweets">
                <h4 className="widget-title">Latest Tweets</h4>
                <ul id="twitter">
                  <li>
                    <span>
                      This is Photoshop's version of Lorem Ipsum. Proin gravida
                      nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
                      quis bibendum auctor, nisi elit consequat ipsum
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">2 Days Ago</a>
                    </b>
                  </li>
                  <li>
                    <span>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi
                      <a href="./">http://t.co/CGIrdxIlI3</a>
                    </span>
                    <b>
                      <a href="./">3 Days Ago</a>
                    </b>
                  </li>
                </ul>
              </div> */}
              <div>
      {/* WhatsApp icon */}
      <a href="https://wa.me/+919653257899" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp size={50}/>
      </a>

      {/* Instagram icon */}
      <a href="https://www.instagram.com/zerowastemanagement2" target="_blank" rel="noopener noreferrer">
        <FaInstagram size={50} />
      </a>

      {/* Facebook icon */}
      <a href="https://www.facebook.com/yourfacebook" target="_blank" rel="noopener noreferrer">
        <FaFacebook size={50} />
      </a>
    </div>
            </aside>
          </Slide>
        </div>
      </section>
    );
  }
}

export default Contact;
