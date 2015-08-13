// Home

import React from 'react/addons';
import Cover from '../../components/Cover';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';
import $ from 'jquery';

@withStyles(styles)
export default class Home extends React.Component {
  constructor() {
    super();
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
          // console.log('You scrolled.');
          // let t = $('#section1');
          // console.log(t.offset().top);
          // console.log($('body').scrollTop());
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
        description: 'User Interface Design + Prototyping + Usability Evaluation + User Research',
        coverClassName: 'UserExperienceDesignCover',
        url: '/user-experience-design'
      },
      {
        description: 'Web Applications + Native iOS Applications',
        coverClassName: 'SoftwareDevelopmentCover',
        url: '/software-development'
      },
      {
        description: 'User Experience Design and Software Development Project Portfolio',
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
              key={category.title}
              description={category.description}
              coverClassName={category.coverClassName}
              url={category.url}
              backgroundImageUrl={category.backgroundImageUrl}
              isLastElement={isLastElement}
              isHomePageCover={true}
              sectionId={index + 1}
            />
          );
        })}
      </article>
    );
  }
}
