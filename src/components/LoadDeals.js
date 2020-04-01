import React, { Component } from 'react';
import LoadDealItem from './LoadDealItem';
import PropTypes from 'prop-types';

class LoadDeals extends Component {
    render() {
        return this.props.loadDeals.map((loadDeal) => (
            <LoadDealItem highlight={this.props.highlight} key={loadDeal.id} loadDeal={loadDeal} selectLoadDeal={this.props.selectLoadDeal}/>
        ));
    }  
}

export default LoadDeals    
