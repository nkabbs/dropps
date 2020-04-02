import React, { Component } from 'react'
import './../App.css'

export class LoadDealItem extends Component {

    render() {
        const { id, title, loadNumber, selected } = this.props.loadDeal;
        const highlight = this.props.highlight;
        var dealItemClasses = 'Load-deal-item';
        
        if (selected) {
            dealItemClasses += ' Selected-load-deal';
        }  else if (highlight) {
            dealItemClasses += ' Highlight-background Btn-element';
        }

        return (
            <div className={dealItemClasses} onClick={this.props.selectLoadDeal.bind(this, id)}>
                <div className='Title-text'>{title}</div>
                <div className='Load-number'>{loadNumber} Loads</div>
            </div>
        )
    }
}

export default LoadDealItem