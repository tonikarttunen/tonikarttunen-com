import React, { Component, PropTypes } from 'react/addons';
import { Router, Route } from 'react-router';
import MainLayout from '../../components/MainLayout';
import NotFound from '../../components/NotFound';
import Menu from '../../components/Menu';
import Projects from '../../components/Projects';
import Viima from '../../components/Viima';
import InteractionDesignAndEvaluation from '../../components/InteractionDesignAndEvaluation';
import StrategicUserCentredDesign from '../../components/StrategicUserCentredDesign';
import HelsinkiGraph from '../../components/HelsinkiGraph';
import LocationAwareApp from '../../components/LocationAwareApp';
import PersonalFinance from '../../components/PersonalFinance';
import LondonTravelGuide from '../../components/LondonTravelGuide';

export default class Root extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    const { history } = this.props;

    return (
      <Router history={history}>
        <Route path='/' component={MainLayout}>
          <Route path='menu' component={Menu}/>
          <Route path='projects' component={Projects}/>
          <Route path='projects/viima-mobile-user-interface' component={Viima}/>
          <Route
            path='projects/aalto-mycourses-usability-evaluation'
            component={InteractionDesignAndEvaluation}/>
          <Route
            path='projects/internet-of-things-solutions-for-lansimetro'
            component={StrategicUserCentredDesign}/>
          <Route path='projects/helsinkigraph' component={HelsinkiGraph}/>
          <Route path='projects/b-sc-thesis' component={LocationAwareApp}/>
          <Route path='projects/personal-finance' component={PersonalFinance}/>
          <Route path='projects/london-travel-guide' component={LondonTravelGuide}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    );
  }
}
