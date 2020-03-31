import React, { Component } from 'react'
import './../App.css'

export class LoadDealItem extends Component {
    getStyle = () => {
        return {
            background: this.props.loadDeal.selected ? '#e3f3fb' : '#fff',
        }
    }

    render() {
        const { id, title, loadNumber } = this.props.loadDeal;
        return (
            <div className='Load-deal-item' onClick={this.props.selectLoadDeal.bind(this, id)} style={this.getStyle()}>
                <div className='Title-text'>{title}</div>
                <div className='Load-number'>{loadNumber} Loads</div>
            </div>
        )
    }
}

export default LoadDealItem