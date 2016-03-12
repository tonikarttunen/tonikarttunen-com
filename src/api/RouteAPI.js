// RouteAPI

import BlogMaster from '../components/Blog/BlogMaster';
import BlogDetail from '../components/Blog/BlogDetail';
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
        path: 'case-studies',
        component: ProjectMaster
      },
      {
        path: 'case-studies/:slug',
        component: ProjectDetail
      }
    ];

    const redirects = [
      {
        from: '/user-experience-design',
        to: '/case-studies'
      },
      {
        from: '/software-development',
        to: '/case-studies'
      },
      {
        from: '/projects',
        to: '/case-studies'
      },
      {
        from: '/projects/:slug',
        to: '/case-studies/:slug'
      },
      {
        from: '/about/bachelorsthesis',
        to: '/case-studies/b-sc-thesis'
      },
      {
        from: '/software',
        to: '/software-development'
      },
      {
        from: '/software/locationawareapp',
        to: '/case-studies/b-sc-thesis'
      },
      {
        from: '/software/personalfinance',
        to: '/case-studies/personal-finance'
      },
      {
        from: '/software/londontravelguide',
        to: '/case-studies/london-travel-guide'
      }
    ];

    return {routes: routes, redirects: redirects};
  }
};