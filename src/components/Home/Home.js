// Home

import React from 'react/addons';
import Cover from '../../components/Cover';
import BlogMasterCompact from '../../components/Blog/BlogMasterCompact';
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
        titleImageFileName: 'src/components/Cover/images/Title-Texts/UserExperienceDesignTitle',
        url: '/user-experience-design'
      },
      {
        coverClassName: 'SoftwareDevelopmentCover',
        titleImageFileName: 'src/components/Cover/images/Title-Texts/SoftwareDevelopmentTitle',
        url: '/software-development'
      },
      {
        coverClassName: 'ProjectsCover',
        titleImageFileName: 'src/components/Cover/images/Title-Texts/ProjectsTitle',
        url: '/projects'
      }
    ];

    return (
      <article className='Home'>
        {categories.map((category, index) => {
          let isLastElement = index === (categories.length - 1) ? true : false;

          return (
            <Cover
              key={category.url}
              coverClassName={category.coverClassName}
              titleImageFileName={category.titleImageFileName}
              url={category.url}
              isLastElement={isLastElement}
              sectionId={index + 1}
            />
          );
        })}
        <BlogMasterCompact/>
      </article>
    );
  }
}
