import React, { Component, PropTypes } from 'react/addons';
import { Router, Route } from 'react-router';
import MainLayout from '../../components/MainLayout';
import NotFound from '../../components/NotFound';
import Projects from '../../components/Projects';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route path='/' component={MainLayout}>
          <Route path='projects' component={Projects} />
          <Route path='*' component={NotFound} />
        </Route>
      </Router>
    );
  }
}
