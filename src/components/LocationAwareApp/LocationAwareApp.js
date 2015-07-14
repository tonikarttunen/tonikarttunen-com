// LocationAwareApp

import React from 'react/addons';
import styles from './LocationAwareApp.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class LocationAwareApp {
  render() {
    return (
      <section className="LocationAwareApp">
        <h2>Location-Aware App</h2>
        <em>B. Sc. thesis project</em>

        <CollapsibleContent>
          <div>
            <p>
              Spring
              2013
            </p>
            <p>
              I developed this app for my Bachelor's thesis.
              The app enables the user to find points of interest nearby.
              You can select whether to use the new Apple Local Search API,
              Foursquare API v.2 or Google Places API to find local search results.
              When using the Foursquare API, it is also possible to use this app
              for checking in to Foursquare places. Because many users
              location-aware apps are concerned about their privacy,
              the app aims protect the user's privacy by providing privacy
              settings and privacy tips.
            </p>
            <p>
              Technology: Objective-C
            </p>
            <p>
              Source code is available on&nbsp;
              <a href="https://github.com/tonikarttunen/LocationAwareAppProject">GitHub</a>.
            </p>
            <h3>B. Sc. Thesis</h3>
            <p className="lead">
              Paikkatiedon hyödyntäminen älypuhelinohjelmistoissa:
              sovelluskehittäjän näkökulma<br/>
              Location-Aware Smartphone Applications
            </p>
            <h4>Summary in English</h4>
            <p>
              Modern smartphone operating systems provide versatile application programming
              interfaces (APIs) for developing location-aware applications. In addition
              to the operating system vendors, various third parties offer similar
              location APIs to app developers.
            </p>
            <p>
              Location-awareness can be utilized in various ways in smartphone applications;
              for instance, it can be used for targeted mobile advertising, sharing the user’s
              location with friends and family members, searching for points of interest nearby,
              and navigation. The benefits of using location data include e.g. improved
              usability, more relevant search results and being able to find people more quickly
              in emergency situations.
            </p>
            <p>
              Unfortunately, majority of people feel that the disadvantages that are related
              to the location-aware applications outweigh the advantages of location-awareness.
              Privacy risks are the most significant issues that cause people to avoid using
              location services. On one hand, software developers may collect too much
              information about the users for targeted advertising and other purposes. On
              the other hand, the users may also threaten their privacy by sharing too much
              information about themselves and other people.
            </p>
            <p>
              To demonstrate several methods for solving the privacy problems and to compare
              the quality of several location APIs, a demo application was developed as part
              of this thesis project. It was discovered that the overall quality of the Google
              location APIs (Google Places API and Google Maps SDK for iOS) is higher than
              the quality of the Apple MapKit framework and the Foursquare API.
            </p>
            <p>
              PDF (in Finnish) **TODO**: Add link
            </p>
            <p>
              Presentation slides (in Finnish) **TODO**: Add link
            </p>
            <p>
              <a href="http://urn.fi/URN:NBN:fi:aalto-201307257437">Thesis record at Aalto University Library</a>
            </p>
            <p>
              <a href="https://github.com/tonikarttunen/Paikkatietosovelluksen_testidata">Test data</a>
            </p>
          </div>
        </CollapsibleContent>
      </section>
    );
  }
}
