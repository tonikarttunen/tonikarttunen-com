// London Travel Guide

import React from 'react/addons';
import styles from './LondonTravelGuide.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class LondonTravelGuide {
  render() {
    return (
      <section className="LondonTravelGuide">
        <h2>London Travel Guide</h2>
        <CollapsibleContent>
          <div>
            <p>
              Autumn
              2013
            </p>
            <p>
              This app was my first iOS app. The development process began
              in June 2012 and ended in August 2012. Even though it wasn't
              a masterpiece in terms of software design, I learned a lot
              while developing the app.
            </p>
            <p>
              Technologies: Objective-C, HTML5, CSS3, JavaScript
            </p>
          </div>
        </CollapsibleContent>
      </section>
    );
  }
}
