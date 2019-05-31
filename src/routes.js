import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './Hoc/Layout';

import Home from './components/Home';

class Routes extends React.Component {
  render() {
    return(
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Layout>
    )
  }
}

export default Routes;