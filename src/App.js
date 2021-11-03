import React from 'react';
import {Component} from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import Header from './components/Header/header';
import Title from './components/Title/title';
import ResetButton from './components/ResetButton/resetbutton';
import Card from './components/Card/card';
import Footer from './components/Footer/footer';
class App extends Component{
    state={
        counters:[
            {id:1, value:4}, {id:2,value:2}, {id:3,value:5}]
    }
   
    handleIncrement= (counter)=>{
        const counters =[...this.state.counters];
        const i =counters.indexOf(counter);
        counters[i].value=counter.value +1;
        this.setState({counters});
       }
   
       handleDelete=(id)=> {
           console.log("ID",id);
           this.state.counters=this.state.counters.filter(el=> el.id != id);
           this.setState(this.state.counters);
       }
    handleReset=()=> {
           this.state.counters.forEach((el)=>{ 
            if(el.value !=0){
            el.value=0;
          
        }
        else{
            console.log("Value is already zero");
        }
            });
            console.log("After Reset",this.state.counters);  
           this.setState(this.state.counters);
       }
   
    render(){
       return(
        <React.Fragment>
            <Header>
            <NavBar  counters={this.state.counters.filter((el)=>el.value > 0).length}/>
            <Title/>
            </Header>
            <ResetButton onReset={this.handleReset} counters={this.state.counters.length}/>
                
                
            <main className="container">
                <Counters counters={this.state.counters} onIncrement={this.handleIncrement} onDelete={this.handleDelete}/>
        
            </main>
            <Card/>
            <Footer/>
            </React.Fragment>        
        );

    }
}
export default App;