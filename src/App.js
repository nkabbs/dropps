import React, { Component } from 'react';
import DealsPage from './components/DealsPage';
import './App.css';
import SubscriptionPage from './components/SubscriptionPage';
import OneTimeOrderPage from './components/OneTimeOrderPage';

class App extends Component {
  selectLoadDeal = (id) => {
    this.setState( { loadDeals: this.state.loadDeals.map(loadDeal => {
      if (loadDeal.id === id) {
        loadDeal.selected = true
      } else {
        loadDeal.selected = false
      }
      return loadDeal;
    }) })
  }

  showDealsPage() {
    this.setState({ 
      showDealsPage:  true,
      showSubscriptionPage: false,
      showOneTimeOrder: false
    })
  }

  showSubscriptionPage() {
    this.setState({ 
      showDealsPage:  false,
      showSubscriptionPage: true,
      showOneTimeOrder: false
    })
  }

  showOneTimeOrderPage() {
    this.setState({ 
      showDealsPage:  false,
      showSubscriptionPage: false,
      showOneTimeOrder: true
    })
  }

  state = {
    loadDeals: [
      {
        id: 1,
        selected: true,
        title: '1 - 4 Washes a Week',
        loadNumber: 64,
        originalPrice: 28,
        subscriptionPrice: null
      },
      {
        id: 2,
        selected: false,
        title: '5 - 10 Washes a Week',
        loadNumber: 160,
        originalPrice: 52,
        subscriptionPrice: 36
      },
      {
        id: 3,
        selected: false,
        title: '11 - 15 Washes a Week',
        loadNumber: 240,
        originalPrice: 66,
        subscriptionPrice: null
      }
    ],
    loadSubscriptionSavings: .3,
    showDealsPage: true,
    showSubscriptionPage: false,
    showOneTimeOrder: false
  }

  render () {
    if (this.state.showDealsPage) {
      return (
        <div className="Deals-page">
          <DealsPage showSubscriptionPage={() => {this.showSubscriptionPage()}} showOneTimeOrderPage={() => {this.showOneTimeOrderPage()}} state={this.state} selectLoadDeal={(id) => this.selectLoadDeal(id)} loadDeals={this.state.loadDeals} loadSubscriptionSavings={this.state.loadSubscriptionSavings}>
          </DealsPage>
        </div>
      );
    } else if (this.state.showSubscriptionPage) {
      return (
          <SubscriptionPage showDealsPage={() => {this.showDealsPage()}}></SubscriptionPage>
      )
    } else if (this.state.showOneTimeOrder){
      return (
        <OneTimeOrderPage showDealsPage={() => {this.showDealsPage()}}></OneTimeOrderPage>
      )
    }
    return null
  
  }
}

export default App;
