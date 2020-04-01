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
      showDealsPage: true,
      showSubscriptionPage: false,
      showOneTimeOrder: false
    })
    this.state.highlightEnabled = false;
  }

  showSubscriptionPage() {
    this.setState({ 
      showDealsPage: false,
      showSubscriptionPage: true,
      showOneTimeOrder: false
    })
    this.state.highlightEnabled = false;
  }

  showOneTimeOrderPage() {
    this.setState({ 
      showDealsPage: false,
      showSubscriptionPage: false,
      showOneTimeOrder: true
    })
    this.state.highlightEnabled = false;
  }

  highlightButtons() {
    //there will always only be one selected load deal, so we can filter and take the first in the array
    var selectedLoadDeal = this.state.loadDeals.filter(loadDeal => loadDeal.selected == true)[0];
    if (selectedLoadDeal.id === this.state.previouslySelectedDeal && this.state.highlightEnabled) {
      this.setState({ highlight: true });
      setTimeout(() => {
        this.setState({ highlight: false });
      }, 300);
    }
    this.state.previouslySelectedDeal = selectedLoadDeal.id;
    this.state.highlightEnabled = true;
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
    showOneTimeOrder: false,
    highlight: false,
    highlightEnabled: true,
    previouslySelectedDeal: 1
  }

  render () {
    if (this.state.showDealsPage) {
      return (
        <div onClick={() => {this.highlightButtons()}}>
          <DealsPage showSubscriptionPage={() => {this.showSubscriptionPage()}} showOneTimeOrderPage={() => {this.showOneTimeOrderPage()}} state={this.state} selectLoadDeal={(id) => this.selectLoadDeal(id)} />
        </div>
      );
    } else if (this.state.showSubscriptionPage) {
      return (
        <div onClick={() => {this.highlightButtons()}}>
          <SubscriptionPage showDealsPage={() => {this.showDealsPage()}} state={this.state} />
        </div>
      )
    } else if (this.state.showOneTimeOrder){
      return (
        <div onClick={() => {this.highlightButtons()}}>
        <OneTimeOrderPage showDealsPage={() => {this.showDealsPage()}} state={this.state}></OneTimeOrderPage>
        </div>
      )
    }
    return null
  }
}

export default App;
