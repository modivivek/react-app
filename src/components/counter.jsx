import React, {Component} from 'react';
import './counters.css';
class Counter extends Component{
styles={
fontSize: 15,
fontWeight: 'bold',
}

    render(){
        return <React.Fragment>
            {this.props.children}

    <h1 className={this.getBadgeClass()}>{this.formatCount()}</h1>
            <button onClick={()=> this.props.onIncrement(this.props.counter)}>Increment</button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            
            </React.Fragment>

    }
    getBadgeClass() {
        return (this.props.counter.value === 0) ? "btn-warning" : "btn-primary";
    }

formatCount(){
    const{value}=this.props.counter;
return value === 0 ? 'zero': this.props.counter.value;
}
}
export default Counter;