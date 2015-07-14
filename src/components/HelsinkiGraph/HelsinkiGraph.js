// HelsinkiGraph

import React from 'react/addons';
import styles from './HelsinkiGraph.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class HelsinkiGraph {
  render() {
    return (
      <section className="HelsinkiGraph">
        <h2>HelsinkiGraph Mobile App Prototype</h2>
        <div className="youtube">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/SnNY_iYPsw4?rel=0"
            frameBorder="0"
            allowFullScreen>
          </iframe>
        </div>
        <CollapsibleContent>
          <div>
            <p>
              Autumn
              2013
            </p>
            <p>
              This app prototype used Finnkino XML API for showing movie showtimes
              and Foursquare API for finding points of interest nearby.
            </p>
            <p>
              Technology
              Objective-C
            </p>
          </div>
        </CollapsibleContent>
      </section>
    );
  }
}
