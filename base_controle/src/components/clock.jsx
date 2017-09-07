import * as React from 'react'

export class Clock extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {

      return(
        <div style={{flexGrow: 3}}>
          <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">

            <text x="110" y="235" style={{fontSize: "30px"}}>
              <tspan x="120" style={{fontSize: "50px"}} >04</tspan>
              <tspan x="110" dy="25">January</tspan>
            </text>

            <circle cx="150" cy="235" r="95" stroke="#00ffff" strokeWidth="15" fill="none" fillOpacity="0"/>
            <path d="M 75,235 a 75 75 0 0,0 60,74" stroke="#167c7c" strokeWidth="10" fill="none" fillOpacity="0"/>
            <path d="M 225,235 a 75 75 0 0,0 -60,-74" stroke="#167c7c" strokeWidth="10" fill="none" fillOpacity="0"/>
            <path d="M 100,200 a 60 60 0 0,0 -5,60" stroke="#0ea7a6" strokeWidth="5" fill="none" fillOpacity="0"/>
            <path d="M 200,270 a 60 60 0 0,0 5,-60" stroke="#0ea7a6" strokeWidth="5" fill="none" fillOpacity="0"/>
            <circle cx="250" cy="175" r="55" stroke="#00ffff" strokeWidth="10" fill="black" />
            <text x="200" y="175" style={{fontSize: "30px"}}>
              <tspan x="220" >23:41</tspan>
              <tspan x="270" dy="-10" style={{fontSize: "15px"}}>31</tspan>
              <tspan x="220" dy="35" style={{fontSize: "15px"}}>Tuesday</tspan>
            </text>
            <path d="M 210,155 a 45 45 0 0,0 20,60" stroke="#167c7c" strokeWidth="5" fill="none" />
            <path d="M 290,195 a 45 45 0 0,0 -20,-60" stroke="#167c7c" strokeWidth="5" fill="none" />

          </svg>
 
        </div>
      );
  }

};

