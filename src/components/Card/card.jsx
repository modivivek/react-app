import React,{Component} from 'react';
import './card.css';
import {ImPhone} from "react-icons/im";
import {IoMdChatboxes} from "react-icons/io"
import {IoIosGlobe} from 'react-icons/io';
import {IoIosStopwatch} from 'react-icons/io';
class Card extends Component{
    state={
        plans:[
            {price: 149, calls: "Unlimited",data: "1 Gb/day",sms: "1000",validity: "24 days"},
            {price: 249, calls: "Unlimited",data: "1.5 Gb/day",sms:"100/day",validity: "28 days"},
            {price: 399, calls: "Unlimited",data: "1.5 Gb/day",sms:"100/day",validity: "56 days"},
            {price: 599, calls: "Unlimited",data: "1.5 Gb/day",sms:"100/day",validity: "84 days"},
            {price: 379, calls: "Unlimited",data: "6 GB",sms:"1000", validity: "84 days"}
        ]
    }
    renderCard(cardData){
            const card=<div className="card__items">
                <div className="card__heading">
                    <h2>Unlimited plan: {cardData.price} </h2>
                </div>
                <div className="card__body">
                    <ul className="plan-description">
                        <li className="plan-description__items">
                            <ImPhone className="plan-description__icons"/>
                            {cardData.calls}</li>
                        <li className="plan-description__items"><IoIosGlobe className="plan-description__icons"/>:{cardData.data}</li>
                        <li className="plan-description__items"><IoMdChatboxes className="plan-description__icons"/>{cardData.sms}</li>
                        <li className="plan-description__items"><IoIosStopwatch className="plan-description__icons"/>{cardData.validity}</li>
                    </ul>
                </div>
                <div className="card__footer">
                <button className="card__footer-btn"><a className="card__footer-link" href="#">Buy now</a></button>
                </div>
            </div>
            return card;
        
    }
    render(){
    return(
            
            <section className="section-cards">
                <h2 className="heading-2">Cellular Tariffs</h2>
                <div className="card-container">
                {this.state.plans.map(el => this.renderCard(el))}
                </div>
            </section>
            
        
    );
}
}
export default Card;