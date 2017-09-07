import * as React from 'react'

export class ProcessBar extends React.Component {

  constructor(props, context) {
      super(props, context);
  }

  render() {

    return(
      <div className="grid progress" style={{width: "100%"}}>
        <div className="grid-3" style={{width: "100%"}}>
          <span >{this.props.label}</span>
          <span className="two-thirds progress-bar flex-container" >
            <div style={{width: this.props.percent+"%"}} className="fl"></div>
            <div className="flex-item-fluid"></div>
          </span>
        </div>
      </div>
    );
  }

};
