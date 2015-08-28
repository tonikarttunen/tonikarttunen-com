// RouteAPI

import UserExperienceDesign from '../components/UserExperienceDesign';
import SoftwareDevelopment from '../components/SoftwareDevelopment';
import Projects from '../components/Projects';
import Viima from '../components/Viima';
import InteractionDesignAndEvaluation from '../components/InteractionDesignAndEvaluation';
import StrategicUserCentredDesign from '../components/StrategicUserCentredDesign';
import HelsinkiGraph from '../components/HelsinkiGraph';
import LocationAwareApp from '../components/LocationAwareApp';
import PersonalFinance from '../components/PersonalFinance';
import LondonTravelGuide from '../components/LondonTravelGuide';

export default {
  getRoutes: () => {
    const routes = [
      {
        path: 'user-experience-design',
        component: UserExperienceDesign
      },
      {
        path: 'software-development',
        component: SoftwareDevelopment
      },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'projects/viima-mobile-user-interface',
        component: Viima
      },
      {
        path: 'projects/aalto-mycourses-usability-evaluation',
        component: InteractionDesignAndEvaluation
      },
      {
        path: 'projects/internet-of-things-solutions-for-lansimetro',
        component: StrategicUserCentredDesign
      },
      {
        path: 'projects/helsinkigraph',
        component: HelsinkiGraph
      },
      {
        path: 'projects/b-sc-thesis',
        component: LocationAwareApp
      },
      {
        path: 'projects/personal-finance',
        component: PersonalFinance
      },
      {
        path: 'projects/london-travel-guide',
        component: LondonTravelGuide
      }
    ];

    const redirects = [
      {
        from: '/about/bachelorsthesis',
        to: '/projects/b-sc-thesis'
      },
      {
        from: '/software',
        to: '/software-development'
      },
      {
        from: '/software/locationawareapp',
        to: '/projects/b-sc-thesis'
      },
      {
        from: '/software/personalfinance',
        to: '/projects/personal-finance'
      },
      {
        from: '/software/londontravelguide',
        to: '/projects/london-travel-guide'
      }
    ];

    return {routes: routes, redirects: redirects};
  }
};