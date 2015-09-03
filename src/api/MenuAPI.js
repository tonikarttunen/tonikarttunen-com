// MenuAPI

import MenuActions from '../actions/MenuActions';

export default {
  getMenuData: () => {
    const data = {
      categories: [
        {
          title: 'Home',
          url: '/'
        },
        {
          title: 'User Experience Design',
          url: '/user-experience-design'
        },
        {
          title: 'Software Development',
          url: '/software-development'
        },
        {
          title: 'Projects',
          url: '/projects'
        }
      ],
      projects: [
        {
          title: 'Viima Mobile User Interface',
          url: '/projects/viima-mobile-user-interface'
        },
        {
          title: 'Aalto MyCourses Usability Evaluation',
          url: '/projects/aalto-mycourses-usability-evaluation'
        },
        {
          title: 'Internet of Things Solutions for Länsimetro',
          url: '/projects/internet-of-things-solutions-for-lansimetro'
        },
        {
          title: 'HelsinkiGraph',
          url: '/projects/helsinkigraph'
        },
        {
          title: 'B. Sc. Thesis',
          url: '/projects/b-sc-thesis'
        },
        {
          title: 'Personal Finance',
          url: '/projects/personal-finance'
        },
        {
          title: 'London Travel Guide',
          url: '/projects/london-travel-guide'
        }
      ]
    };

    MenuActions.receiveItems(data);
  }
};
