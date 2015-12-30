// RouteAPI

import BlogMaster from '../components/Blog/BlogMaster';
import BlogDetail from '../components/Blog/BlogDetail';
import UserExperienceDesign from '../components/UserExperienceDesign';
import SoftwareDevelopment from '../components/SoftwareDevelopment';
import ProjectMaster from '../components/Projects/ProjectMaster';
import Viima from '../components/Projects/Viima';
import InteractionDesignAndEvaluation from '../components/Projects/InteractionDesignAndEvaluation';
import StrategicUserCentredDesign from '../components/Projects/StrategicUserCentredDesign';
import HelsinkiGraph from '../components/Projects/HelsinkiGraph';
import LocationAwareApp from '../components/Projects/LocationAwareApp';
import PersonalFinance from '../components/Projects/PersonalFinance';
import LondonTravelGuide from '../components/Projects/LondonTravelGuide';

export default {
  getRoutes: () => {
    const routes = [
      {
        path: 'blog',
        component: BlogMaster
      },
      {
        path: 'blog/:year/:month/:day/:slug',
        component: BlogDetail
      },
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
        component: ProjectMaster
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