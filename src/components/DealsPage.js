import React, { Component } from 'react';
import LoadDeals from './LoadDeals';
import './../App.css';

export class DealsPage extends Component {
    render() {
        var selectedLoadDeal = this.props.state.loadDeals.filter(loadDeal => loadDeal.selected == true)[0];
        var formattedOriginalPrice = Intl.NumberFormat('US-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(selectedLoadDeal.originalPrice) + '$';
        var formattedSubscriptionPrice = Intl.NumberFormat('US-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(selectedLoadDeal.subscriptionPrice != null ? selectedLoadDeal.subscriptionPrice : selectedLoadDeal.originalPrice * (1 - this.props.loadSubscriptionSavings));
        return (
            <div>
                <header className="App-header">
                    <b>How Often Do You Wash?</b>
                </header>
                <LoadDeals loadDeals={this.props.state.loadDeals} selectLoadDeal={this.props.selectLoadDeal.bind(this)}/>
                <div className='Title-text Subscription-rate'>
                    {this.props.state.loadDeals.filter(loadDeal => loadDeal.selected == true).map(x => 
                        <div><strike>{formattedOriginalPrice}</strike> <span>{formattedSubscriptionPrice}$ with subscription</span></div>)
                    }
                </div>
                <div className='Element Subscribe-button' onClick={this.props.showSubscriptionPage.bind(this)}>Subscribe & Save {this.props.loadSubscriptionSavings * 100}%</div>
                <div className='Guarantee'>Pause, modify, or cancel anytime!</div>
                <div className='Link' onClick={this.props.showOneTimeOrderPage.bind(this)}>One-Time Order</div>
                <div>I prefer to dropp the subscription</div>
            </div>
        );      
    }  
}

export default DealsPage
