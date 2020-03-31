import React, { Component } from 'react';
import './../App.css'

export class OneTimeOrderPage extends Component {
    render() {
        return (
            <div className='App-header'>
                <div className='Subscribe-message'>You selected <br />One-Time Order</div>
                <div className='Link Go-back' onClick={this.props.showDealsPage.bind(this)}>Go Back</div>
            </div>
        );      
    }  
}

export default OneTimeOrderPage    
