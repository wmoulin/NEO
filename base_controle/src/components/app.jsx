import React from 'react'
import { Clock } from "./clock";
import { ProcessBar } from "./process-bar";
import { Tweets } from "./tweets";
import { Neo } from "./neo";

export class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

  }

  render() {
    return (<div>
      <div className="grid-3">
        <div className="flex-container" style={{flexDirection: "column"}}>
          <Clock/>
          <div style={{flexGrow: 1}}>
            <ProcessBar label="CPU" percent={50}/>
            <ProcessBar label="Load" percent={50}/>
            <ProcessBar label="Memory" percent={50}/>
          </div>
        </div>
        <div><Neo/></div>
        <Tweets/>
      </div>                    
    </div>);
  }

}
