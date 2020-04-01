import React, { Component } from 'react'
import './../App.css'

export class LoadDealItem extends Component {
    getStyle = () => {
        return {
            background: this.props.loadDeal.selected ? '#e3f3fb' : (this.props.highlight ? '#84d6e8' : '#fff'),
        }
    }

    render() {
        const { id, title, loadNumber, selected } = this.props.loadDeal;
        const highlight = this.props.highlight;
        return (
            <div className={highlight ? 'Element Load-deal-item' : 'Load-deal-item'} onClick={this.props.selectLoadDeal.bind(this, id)} style={this.getStyle()}>
                <div className='Title-text'>{title}</div>
                <div className='Load-number'>{loadNumber} Loads</div>
            </div>
        )
    }
}

export default LoadDealItem