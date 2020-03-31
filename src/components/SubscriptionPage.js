import React, { Component } from 'react';
import './../App.css'

export class SubscriptionPage extends Component {
    render() {
        return (
            <div className='App-header'>
                <div className='Subscribe-message'>You selected Subscribe!</div>
                <div className='Link Go-back' onClick={this.props.showDealsPage.bind(this)}>Go Back</div>
            </div>
        );      
    }  
}

export default SubscriptionPage    
