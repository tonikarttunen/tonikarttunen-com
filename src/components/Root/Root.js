import React, { Component, PropTypes } from 'react/addons';
import { Router, Route } from 'react-router';
import MainLayout from '../../components/MainLayout';
import NotFound from '../../components/NotFound';
import About from '../../components/About';
import Projects from '../../components/Projects';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route name='MainLayout' path='/' component={MainLayout}>
          <Route name='About' path='/about' component={About} />
          <Route name='Projects' path='/projects' component={Projects} />
          <Route name="NotFound" path="*" component={NotFound} />
        </Route>
      </Router>
    );
  }
}
