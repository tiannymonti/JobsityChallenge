import React, { Component } from 'react';
import Calendar from './containers/Calendar/Calendar';
import Layout from './containers/Layout/Layout'

class App extends Component {
  render() {
    return (
      <div>
          <Layout>
            <Calendar/>
          </Layout>
      </div>
    );
  }
}

export default App;