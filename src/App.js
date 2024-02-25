import React, { Component } from "react";
import ReactGA from "react-ga";
import $ from "jquery";
import "./App.css";
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
import HomeScreen from "./Components/screens/Homescreen";
import PriceScreen from "./Components/screens/pricescreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PriceDetail from "./Components/screens/pricedetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foo: "bar",
      resumeData: {}
    };

    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  getResumeData() {
    $.ajax({
      url: "./resumeData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ resumeData: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
        alert(err);
      }
    });
  }

  componentDidMount() {
    this.getResumeData();
  }

  render() {
    console.log('loggggggg',this.state.resumeData.resume);
    return (
      <BrowserRouter>
      <Routes>
      
          <Route index element={<HomeScreen />} />
        <Route path="/price" element={<PriceScreen />} />

        <Route path="/Home" element={<HomeScreen />} />
        <Route path="/pricedet" element={<PriceDetail />} />


     
      </Routes>
    </BrowserRouter>
    );
  }
}

export default App;
