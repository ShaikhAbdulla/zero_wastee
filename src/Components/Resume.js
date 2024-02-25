import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const individual=[{'company':'Scrap collection','title':'We specialize in the efficient collection of scrap materials, making it easy for you to dispose of unwanted items responsibly. Whether its household scrap, industrial waste, or electronic components, our team ensures proper handling and recycling.'}
    ,
    {'company':'Vehicle Scrapping and Dismantling','title':'Stay compliant with environmental regulations by opting for our vehicle scrapping and dismantling services. We ensure that end-of-life vehicles are disposed of responsibly, recycling materials and minimizing environmental impact.'}
  ,
  {'company':'Zero Waste Society','title':'Join us on the journey towards a zero-waste society. Our initiatives and programs focus on minimizing waste generation, promoting recycling, and fostering a culture of sustainability within communities.'} 
  ,
  {'company':'Segregation Guidelines with Safai Sathi:','title':'We provide clear and easy-to-follow segregation guidelines to assist individuals and businesses in sorting their waste efficiently. Our trained Safai Sathis (cleaning companions) are available to guide and educate on proper waste segregation practices.'} 
  ]
    const education = individual.map(function (education) {
      return (
        <div key={education.company}>
          <h3>{education.company}</h3>
          <p className="info">
            {education.title} <span>&bull;</span>
            {/* <em className="date">{education.graduated}</em> */}
          </p>
          {/* <p>{education.description}</p> */}
        </div>
      );
    });

    const business=[{'company':'Scrap collection','title':'We specialize in the efficient collection of scrap materials, making it easy for you to dispose of unwanted items responsibly. Whether its household scrap, industrial waste, or electronic components, our team ensures proper handling and recycling.'}
  ,
  {'company':'Vehicle Scrapping and Dismantling','title':'Stay compliant with environmental regulations by opting for our vehicle scrapping and dismantling services. We ensure that end-of-life vehicles are disposed of responsibly, recycling materials and minimizing environmental impact.'}
,
{'company':'Safai Sathi Manpower Supplier for Proper Waste Management','title':'Need skilled manpower for effective waste management? Our Safai Sathis are well-trained professionals equipped to handle waste collection, segregation, and disposal with utmost care and responsibility.'} 
,
{'company':'Segregation Guidelines with Safai Sathi:','title':'We provide clear and easy-to-follow segregation guidelines to assist individuals and businesses in sorting their waste efficiently. Our trained Safai Sathis (cleaning companions) are available to guide and educate on proper waste segregation practices.'} 
]

    const work=business.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });
console.log('iuiuiuiuiu',this.props.data.skills);
const level=[{'name':'Wet waste','level':'60%'},
{'name':'Dry waste','level':'80%'},
{'name':'Hazardous waste','level':'30%'},
{'name':'Food donated','level':'40%'}
]
    const skills = level.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
        <div className="row education">
        <h1 style={{fontSize:35}}>Services</h1>
        </div>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>For individuals</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
         
            <div className="three columns header-col">
              <h1>
                <span>For business</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Waste Management</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
