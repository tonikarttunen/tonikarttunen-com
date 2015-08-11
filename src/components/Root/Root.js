import React, { Component, PropTypes } from 'react/addons';
import { Router, Route } from 'react-router';
import MainLayout from '../../components/MainLayout';
import NotFound from '../../components/NotFound';
import UserExperienceDesign from '../../components/UserExperienceDesign';
import SoftwareDevelopment from '../../components/SoftwareDevelopment';
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

    // TODO: figure out how to append trailing slashes automatically
    // just like the Django router does

    return (
      <Router history={history}>
        <Route path='/' component={MainLayout}>
          <Route path='user-experience-design' component={UserExperienceDesign}/>
          <Route path='user-experience-design/' component={UserExperienceDesign}/>
          <Route path='software-development' component={SoftwareDevelopment}/>
          <Route path='software-development/' component={SoftwareDevelopment}/>
          <Route path='projects' component={Projects}/>
          <Route path='projects/' component={Projects}/>
          <Route path='projects/viima-mobile-user-interface' component={Viima}/>
          <Route path='projects/viima-mobile-user-interface/' component={Viima}/>
          <Route
            path='projects/aalto-mycourses-usability-evaluation'
            component={InteractionDesignAndEvaluation}/>
          <Route
            path='projects/aalto-mycourses-usability-evaluation/'
            component={InteractionDesignAndEvaluation}/>
          <Route
            path='projects/internet-of-things-solutions-for-lansimetro'
            component={StrategicUserCentredDesign}/>
          <Route
            path='projects/internet-of-things-solutions-for-lansimetro/'
            component={StrategicUserCentredDesign}/>
          <Route path='projects/helsinkigraph' component={HelsinkiGraph}/>
          <Route path='projects/helsinkigraph/' component={HelsinkiGraph}/>
          <Route path='projects/b-sc-thesis' component={LocationAwareApp}/>
          <Route path='projects/b-sc-thesis/' component={LocationAwareApp}/>
          <Route path='projects/personal-finance' component={PersonalFinance}/>
          <Route path='projects/personal-finance/' component={PersonalFinance}/>
          <Route path='projects/london-travel-guide' component={LondonTravelGuide}/>
          <Route path='projects/london-travel-guide/' component={LondonTravelGuide}/>
          <Route path='*' component={NotFound}/>
        </Route>
      </Router>
    );
  }
}
