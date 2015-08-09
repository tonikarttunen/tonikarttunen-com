// Home

import React from 'react/addons';
import Cover from '../../components/Cover';
import styles from './Home.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Home {
  render() {
    const categories = [
      {
        title: 'User Experience Design',
        description: 'User Interface Design + Prototyping + Usability Evaluation + User Research',
        coverClassName: 'UserExperienceDesignCover',
        url: '/user-experience-design',
        backgroundImageUrl: ''
      },
      {
        title: 'Software Development',
        description: 'Web Applications + Native iOS Applications',
        coverClassName: 'SoftwareDevelopmentCover',
        url: '/software-development',
        backgroundImageUrl: ''
      },
      {
        title: 'Projects',
        description: 'User Experience Design and Software Development Project Portfolio',
        coverClassName: 'ProjectsCover',
        url: '/projects',
        backgroundImageUrl: ''
      }
    ];

    return (
      <article className='Home'>
        {categories.map((category, index) => {
          let isLastElement = index === (categories.length - 1) ? true : false;

          return (
            <Cover
              key={category.title}
              title={category.title}
              description={category.description}
              coverClassName={category.coverClassName}
              url={category.url}
              backgroundImageUrl={category.backgroundImageUrl}
              isLastElement={isLastElement}
              sectionId={index + 1}
            />
          );
        })}
      </article>
    );
  }
}
