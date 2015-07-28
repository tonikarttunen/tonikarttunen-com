// LocationAwareApp

import React from 'react/addons';
import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';
import styles from './LocationAwareApp.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';

@withStyles(styles)
export default class LocationAwareApp extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null
    };

    // React >= 0.13.x does not autobind non-React methods to 'this'
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  }

  render() {
    const IMAGE_PATH_PREFIX = 'src/components/LocationAwareApp/images/';

    return (
      <section className='LocationAwareApp'>
        <Grid>
          <h2>B. Sc. Thesis</h2>

          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt='220x330'
                src={staticPath(IMAGE_PATH_PREFIX + 'Trending.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt='220x330'
                src={staticPath(IMAGE_PATH_PREFIX + 'Pittsburgh.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt='220x330'
                src={staticPath(IMAGE_PATH_PREFIX + 'KirjastoOmena.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt='220x330'
                src={staticPath(IMAGE_PATH_PREFIX + 'FoursquareCheckIn.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt='220x330'
                src={staticPath(IMAGE_PATH_PREFIX + 'PrivacySettings.jpg')} />
            </CarouselItem>
          </Carousel>

          <Row>
            <Col md={4} className='InfoBox'>
              <h3>Spring</h3>
              <p>2013</p>
              <h3>B. Sc. Thesis</h3>
              <p>
                <a href='http://www.tonikarttunen.com/about/bachelorsthesis/Bachelors_Thesis_Toni_Karttunen_Aalto_University_2013.pdf'>
                  PDF
                </a>
                &nbsp;(42 pages, in Finnish)
              </p>
              <h3>Presentation slides</h3>
              <p>
                <a href='http://www.tonikarttunen.com/about/bachelorsthesis/Bachelors_Thesis_Presentation_Toni_Karttunen_Aalto_University_2013.pdf'>
                  PDF
                </a>
                &nbsp;(15 pages, in Finnish)
              </p>
              <h3>Thesis Record</h3>
              <p>
                <a href='http://urn.fi/URN:NBN:fi:aalto-201307257437'>
                  Aalto University Library
                </a>
              </p>
              <h3>Test Data</h3>
              <p>
                <a href='https://github.com/tonikarttunen/Paikkatietosovelluksen_testidata'>
                  GitHub
                </a>
              </p>
              <hr/>
              <h3>Location-Aware App</h3>
              <p className='NormalParagraph'>
                As part of my thesis project, I developed an iOS app.
                The app enables the user to find points of interest nearby.
                You can select whether to use the new Apple Local Search API,
                Foursquare API v.2 or Google Places API to find local search results.
                When using the Foursquare API, it is also possible to use this app
                for checking in to Foursquare places. Because many users
                location-aware apps are concerned about their privacy,
                the app aims protect the user's privacy by providing privacy
                settings and privacy tips.
              </p>
              <h3>Source Code</h3>
              <p>
                <a href='https://github.com/tonikarttunen/LocationAwareAppProject'>
                  GitHub
                </a>
              </p>
              <h3>Technology</h3>
              <p>Objective-C</p>
            </Col>
            <Col md={8}>
              <p className='lead'>
                Paikkatiedon hyödyntäminen älypuhelinohjelmistoissa:
                sovelluskehittäjän näkökulma&nbsp; —&nbsp;
                Location-Aware Smartphone Applications
              </p>
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
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
