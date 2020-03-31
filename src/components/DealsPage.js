import React, { Component } from 'react';
import LoadDeals from './LoadDeals';
import './../App.css';
import PropTypes from 'prop-types';

export class DealsPage extends Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <b>How Often Do You Wash?</b>
                </header>
                <LoadDeals loadDeals={this.props.state.loadDeals} selectLoadDeal={this.props.selectLoadDeal.bind(this)}/>
                <div className='Title-text Subscription-rate'>
                    {this.props.state.loadDeals.filter(loadDeal => loadDeal.selected == true).map(x => 
                        <div><strike>{Intl.NumberFormat('US-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(x.originalPrice)}$</strike> <span>{Intl.NumberFormat('US-us', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(x.subscriptionPrice)}$ with subscription</span></div>)
                    }
                </div>
                <div className='Element Subscribe-button' onClick={this.props.showSubscriptionPage.bind(this)}>Subscribe & Save 30%</div>
                <div className='Guarantee'>Pause, modify, or cancel anytime!</div>
                <div className='Link' onClick={this.props.showOneTimeOrderPage.bind(this)}>One-Time Order</div>
                <div>I prefer to dropp the subscription</div>
            </div>
        );      
    }  
}

export default DealsPage

