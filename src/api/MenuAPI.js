// MenuAPI

import MenuActions from '../actions/MenuActions';

export default {
  getMenuData: () => {
    const data = {
      categories: [
        {
          title: 'Home',
          url: '/portfolio'
        },
        {
          title: 'Case Studies',
          url: '/case-studies'
        },
        {
          title: 'Blog',
          url: '/blog'
        }
      ]
    };

    MenuActions.receiveItems(data);
  }
};
