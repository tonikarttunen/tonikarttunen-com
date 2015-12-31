// RouteAPI

import BlogMaster from '../components/Blog/BlogMaster';
import BlogDetail from '../components/Blog/BlogDetail';
import UserExperienceDesign from '../components/UserExperienceDesign';
import SoftwareDevelopment from '../components/SoftwareDevelopment';
import ProjectMaster from '../components/Projects/ProjectMaster';
import ProjectDetail from '../components/Projects/ProjectDetail';

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
        path: 'projects/:slug',
        component: ProjectDetail
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