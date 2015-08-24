// Home

import React from 'react/addons';
import Cover from '../../components/Cover';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollThrottler = null;
  }

  // Attach a handler for scroll events
  componentDidMount() {
    let didScroll = false;

    if (typeof window.onscroll !== 'undefined') {
      $(window).on('scroll', () => {
        didScroll = true;
      });

      this.scrollThrottler = setInterval(() => {
        if (didScroll) {
          didScroll = false;

          // TODO: Add some scroll effects

        }
      }, 300);
    }
  }

  // Remove scroll event handler
  componentWillUnmount() {
    if (typeof window.onscroll !== 'undefined') {
      $(window).off('scroll');
      window.clearInterval(this.scrollThrottler);
    }
  }

  render() {
    const categories = [
      {
        coverClassName: 'UserExperienceDesignCover',
        url: '/user-experience-design'
      },
      {
        coverClassName: 'SoftwareDevelopmentCover',
        url: '/software-development'
      },
      {
        coverClassName: 'ProjectsCover',
        url: '/projects'
      }
    ];

    return (
      <article className='Home'>
        {categories.map((category, index) => {
          let isLastElement = index === (categories.length - 1) ? true : false;

          return (
            <Cover
              key={category.description}
              coverClassName={category.coverClassName}
              url={category.url}
              isLastElement={isLastElement}
              sectionId={index + 1}
            />
          );
        })}
      </article>
    );
  }
}
