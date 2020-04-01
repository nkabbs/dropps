import React, { Component } from 'react';
import './../App.css'

export class OneTimeOrderPage extends Component {
    render() {
        return (
            <div className='App-header'>
                <div className='Subscribe-message'>You selected <br />One-Time Order</div>
                <span className='Element Link Go-back' style={this.props.state.highlight ? highlightFontStyle : null} onClick={this.props.showDealsPage.bind(this)}>Go Back</span>
            </div>
        );      
    }  
}

const highlightFontStyle = {
    backgroundColor: '#84d6e8'
}

export default OneTimeOrderPage    
