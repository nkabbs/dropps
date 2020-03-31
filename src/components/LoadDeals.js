import React, { Component } from 'react';
import LoadDealItem from './LoadDealItem';
import PropTypes from 'prop-types';

class LoadDeals extends Component {
    render() {
        return this.props.loadDeals.map((loadDeal) => (
            <LoadDealItem key={loadDeal.id} loadDeal={loadDeal} selectLoadDeal={this.props.selectLoadDeal}/>
        ));
    }  
}

LoadDeals.propTypes = {
    loadDeals: PropTypes.array.isRequired
}

export default LoadDeals    
