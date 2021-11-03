import React,{Component} from 'react';

class ResetButton extends Component{
    render(){

        return(
            <React.Fragment>
            <div style={{padding: 20}}>
              <button style={{marginRight: 20}} onClick={this.props.onReset}>Reset</button>
                     <span style={{fontSize: 20, color: "#000", fontWeight: 400}}>Total Counters: {this.props.counters}</span>
              </div>
               
          </React.Fragment>
      );
    }
}
export default ResetButton;