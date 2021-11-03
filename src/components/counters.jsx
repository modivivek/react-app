import React,{Component} from 'react';
import Counter from './counter';
import './counters.css';
class Counters extends Component{
    
    render(){
        return(
        
        <div>
        
            {this.props.counters.map(counter =>{
           return  <Counter key={counter.id} onDelete={this.props.onDelete}  counter={counter} onIncrement={this.props.onIncrement} >
               <h4 className="counter-title">Counter{counter.id}</h4>
              
           </Counter>
            })}
         </div>
        )}
}
export default Counters;

