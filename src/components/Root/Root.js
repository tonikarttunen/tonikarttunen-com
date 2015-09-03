import React, { Component, PropTypes } from 'react/addons';
import { Redirect, Route, Router } from 'react-router';
import MainLayout from '../../components/MainLayout';
import NotFound from '../../components/NotFound';
import $ from 'jquery';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    routeData: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);
  }

  render() {
    const { history } = this.props;
    const { routes, redirects } = this.props.routeData;    

    // TODO: figure out how to append trailing slashes automatically
    // just like the Django router does. Additionally, consider handling
    // nested routes in a different way.

    return (
      <Router history={history}>
        <Route path='/' component={MainLayout}>
          {routes.map(route => {
            return (
              <span key={route.path}>
                <Route path={route.path} component={route.component}/>
                <Route path={route.path + '/'} component={route.component}/>
              </span>
            );
          })}

          {redirects.map(redirectPath => {
            return (
              <span key={redirectPath.from}>
                <Redirect from={redirectPath.from} to={redirectPath.to}/>
                <Redirect from={redirectPath.from + '/'} to={redirectPath.to}/>
              </span>
            );
          })}

          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    );
  }
}
