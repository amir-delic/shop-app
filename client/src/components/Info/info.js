import React, { Component } from "react";
import "../../styles/Info/info.css";

class Info extends Component {
  constructor(props) {
    super(props);
    this.state = {
      information: [
        {
          img: <i className="far fa-circle"></i>,
          desc: "Tumble dry allowed",
          info:
            "Our clothes can be safely tumble dried. Simply put, tumble dry means that you can dry the garment in your dryer instead of air drying it.",
        },
        {
          img: <i className="fas fa-water"></i>,
          desc: "Machine Wash",
          info:
            "Clothes are suitable for washing in a washing machine! Capable of being washed in a washing machine without being damaged.",
        },
        {
          img: <i className="fas fa-exclamation-triangle"></i>,
          desc: "Do Not Bleach",
          info:
            "You can find out more about the different types of bleach and how to use them in our bleaching guide! For now do NOT bleach!",
        },
        {
          img: <i className="fas fa-tshirt"></i>,
          desc: "Iron Low Heat",
          info:
            "Press on the wrong side of the fabric with a pressing cloth between the iron and the fabric. Use no steam which can leave watermarks on the fabric.!",
        },
      ],
    };
  }
  render() {
    return (
      <div className="information">
        <h2>Clothes washing instructions</h2>
        <div className="info row">
          {this.state.information.map((item, i) => (
            <div key={i} className="info-spec col-md-auto col-lg-auto">
              {item.img}
              <h4>{item.desc}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Info;
