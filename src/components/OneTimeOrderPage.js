import React, { Component } from 'react';
import './../App.css'

export class OneTimeOrderPage extends Component {
    render() {
        var goBackClasses = 'Btn-element Link Go-back'
        if (this.props.state.highlight) {
            goBackClasses += ' Highlight-background'
        }

        return (
            <div className='App-header'>
                <div className='Subscribe-message'>You selected <br />One-Time Order</div>
                <span className={goBackClasses} onClick={this.props.showDealsPage.bind(this)}>Go Back</span>
            </div>
        );      
    }  
}

export default OneTimeOrderPage    
