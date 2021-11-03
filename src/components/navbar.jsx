import React from 'react';
import {Component} from 'react';
import Counter from './counter';

class NavBar extends Component{
    state={
        items:[
            {
                id: 1,
               value:"Home"
            },{
                id:2,
                value:"About Us"
            },
            {
                id:3,
                value: "Plans"
            }
            ]
    }
    styles={
        color: "orange",
        display:"block"
    }
    
    render(){
        return(
            <React.Fragment>
            <nav className="navbar navbar-dark bg-light">
                <a className="navbar-brand"  style={this.styles}>Logo</a>
            <ul style={{listStyleType: "none",textDecoration:'none'}}>
        {this.state.items.map(el=> <li key={el.id} style={{display: "inline-block", marginRight: "20px"}}><a href="#">{el.value}</a></li>)}
            </ul>   
             </nav>
            </React.Fragment>
             
                 
        );
    }
}
export default NavBar;