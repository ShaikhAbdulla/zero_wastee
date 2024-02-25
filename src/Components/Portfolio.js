import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import { Link } from "react-router-dom";
import PriceDetail from "./screens/pricedetail";

let id = 0;
class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
     isDetail:false,
     detail:[]
    };

   
  }
  render() {
   
    
const work = [{'title':'Scrap Collection','image':'Work1.jpg'},
{'title':'Scrap segregation','image':'Work2.jpg'},
{'title':'work','image':'Work3.jpg'},
{'title':'work','image':'Work4.jpg'},
{'title':'Recycling Waste','image':'Work5.jpg'}]
const Price = [
{'title':'Paper','image':'paper.jpg',
'category':[{'type':'Newspaper','price':'10'},
{'type':'Books','price':'10'},
{'type':'Carton','price':'10'},
{'type':'Magazines','price':'8'},
{'type':'White papers','price':'8'},
{'type':'Grey boards','price':'2'},
{'type':'Record papers','price':'8.5'},
{'type':'Copy','price':'8'},
{'type':'Beverages carton','price':'7'}
]},
{'title':'Plastic','image':'plastic.jpg',
'category':[{'type':'Soft plastic','price':'7'},
{'type':'Hard plastic','price':'2'},
{'type':'Mix plastic','price':'5'},
{'type':'Milk covers','price':'3'},
{'type':'Water/Oil covers','price':'1'},
{'type':'Polythene','price':'6'},
{'type':'Plastic Jar','price':'11'},
{'type':'Fibre','price':'6'},
{'type':'Plastic goni','price':'2'}
]
},
{'title':'Metal','image':'metal.jpg',
'category':[{'type':'Iron','price':'25'},
{'type':'Tin','price':'15'},
{'type':'Steel','price':'23'},
{'type':'Brass','price':'250'},
{'type':'Copper','price':'240'},
{'type':'Aluminium','price':'68'},
{'type':'Oil tin','price':'5'},
{'type':'Casting aluminium','price':'32'},
{'type':'Beverages cans','price':'75'}
]},
{'title':'E-waste','image':'e-waste.jpg',
'category':[{'type':'E-waste','price':'10'},
{'type':'Fridge','price':'300'},
{'type':'Screens','price':'NA'},
{'type':'Solar panels','price':'NA'},
{'type':'Cooling equipment','price':'NA'}

]},
{'title':'Others','image':'battery.jpg',
'category':[{'type':'Beer bottles','price':'2'},
{'type':'Mix-waste','pice':'3.5'},
{'type':'Battery','price':'72'},
{'type':'Tyre','price':'4'},
{'type':'Chemical-waste','pice':'NA'},
{'type':'Industrial waste','pice':'NA'},

]}
]
 const back=(back)=>{
this.setState({isDetail:back})
}
    const projects = work.map(function (projects) {
      let projectImage = "images/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center"}}>{projects.title}</div>
          </div>
        </div>
      );
    });
    const prices = Price.map( (projects,index) => {
      let projectImage = "images/" + projects.image;

      return (
        <div onClick={()=>this.setState({isDetail:true,detail:projects})} key={id++} className="columns portfolio-item">
        {/* <Link   key={index}  to={{ pathname: '/pricedet', state: projects }}> */}
        
          <div className="item-wrap">
            <img style={{height:150,width:500}} alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center",fontSize:20,color:'white',backgroundColor:'black'}}>{projects.title}</div>
          </div>
          {/* </Link> */}
        </div>
      );
    });

    if(this.state.isDetail){
      return <PriceDetail onBack={back} detail={this.state.detail}/>
    }else{
    return (
      <section id="portfolio" style={{backgroundColor:this.props.data=='price'?'black':null}} >
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{fontSize:30}}>{this.props.data=='price'?'Scrap Prices':'Check Out Some of our Works'}</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {this.props.data=='price'?prices:projects}
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
  }
}

export default Portfolio;
