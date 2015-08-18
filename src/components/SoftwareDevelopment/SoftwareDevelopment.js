// SoftwareDevelopment

import React from 'react/addons';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import styles from './SoftwareDevelopment.less';
import withViewport from '../../decorators/withViewport';
import withStyles from '../../decorators/withStyles';
import CategoryDetailView from '../../components/CategoryDetailView';
import ContentGrid from '../../components/ContentGrid';
import DetailViewCover from '../../components/DetailViewCover';

@withViewport
@withStyles(styles)
export default class SoftwareDevelopment {
  static propTypes = {
    viewport: React.PropTypes.shape({
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    const servicesTitle = 'Programming Experience';
    const projectsTitle = 'Related Projects';

    const viewportWidth = this.props.viewport.width;
    let canvasWidth = 1140; // Width when viewport width >= 1200px
    let canvasHeight = 680; // Height when viewport width >= 1200px

    if (viewportWidth <= 1199 && viewportWidth > 991) {
      canvasWidth = 940;
    } else if (viewportWidth <= 991 && viewportWidth > 767) {
      canvasWidth = 720;
    } else if (viewportWidth <= 767) {
      canvasWidth = viewportWidth - 30;
    }

    if (viewportWidth <= 1199) {
      canvasHeight = Math.floor(canvasWidth * 680 / 1140);
    }

    return (
      <CategoryDetailView>
        <DetailViewCover
          title={'Software Development'}
          coverClassName={'SoftwareDevelopmentDetailViewCover'}>
          <canvas
            id='SoftwareDevelopmentDetailViewCoverCanvas'
            width={canvasWidth}
            height={canvasHeight}/>
        </DetailViewCover>

        <div className='SoftwareDevelopment' id='section2'>
          <ContentGrid title={servicesTitle}>
            <Row>
              <Col md={4}>
                <h4>Front-End Development</h4>
                <p>
                  I have experience in developing modern single-page apps with Backbone.js.
                  I used Backbone.js when developing&nbsp;
                  <Link to='/projects/viima-mobile-user-interface'>Viima mobile user interface</Link>.&nbsp;
                  Recently, I have been learning React and ECMAScript 2015 (ES6); this website
                  uses React and ES6 for its user interface components.
                </p>
              </Col>
              <Col md={4}>
                <h4>Server-Side Programming</h4>
                <p>
                  I have some experience in developing web apps with the Django framework in Python.
                  I have also tried some other web app frameworks; for example, this web app that
                  you are using right now is written using the Express framework and Node.js (the
                  source code is available on <a href='https://github.com/tonikarttunen/tonikarttunen-com'>GitHub</a>).
                </p>
              </Col>
              <Col md={4}>
                <h4>Mobile App Development</h4>
                <p>
                  I have developed iOS applications in Objective-C. In addition to Apple’s iOS
                  frameworks, I am familiar with some third party SDKs, such Google Maps iOS SDK.
                </p>
              </Col>
            </Row>
          </ContentGrid>

          <ContentGrid title={projectsTitle}>
            <Row>
              <Col md={4}>
                <h4>Viima Mobile User Interface</h4>
                <p>
                  Viima Mobile UI is single-page app that is written in JavaScript using the
                  popular Backbone.js framework. Viima is a browser-based tool that can be used
                  as a feedback system and as an internal innovation platform within Viima's
                  client companies.
                </p>
                <p>
                  <Link to='/projects/viima-mobile-user-interface' className='MoreInformation'>
                    More Information
                  </Link>
                </p>
              </Col>
              <Col md={4}>
                <h4>HelsinkiGraph</h4>
                <p>
                  This mobile app prototype can be used for finding movie showtimes in Finnish cinemas.
                  It can also be used for finding points of interests nearby. The app was written in
                  Objective-C.
                </p>
                <p>
                  <Link to='/projects/helsinkigraph' className='MoreInformation'>
                    More Information
                  </Link>
                </p>
              </Col>
              <Col md={4}>
                <h4>B. Sc. Thesis / Location-Aware Mobile App</h4>
                <p>
                  In my B. Sc. thesis project, I developed a location-aware mobile app
                  for iOS in Objective-C. It uses Google Maps iOS SDK, Google Places API,
                  Foursquare API, and Apple's iOS frameworks.
                </p>
                <p>
                  <Link to='/projects/b-sc-thesis' className='MoreInformation'>
                    More Information
                  </Link>
                </p>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <h4>Personal Finance</h4>
                <p>
                  Perosnal Finance is a prototype of a personal financial management mobile app.
                  One of the main goals of this project was to develop the app so that it would
                  be accessible to all the possible user groups, including visually impaired
                  and color blind users.
                </p>
                <p>
                  <Link to='/projects/personal-finance' className='MoreInformation'>
                    More Information
                  </Link>
                </p>
              </Col>
              <Col md={4}>
                <h4>London Travel Guide</h4>
                <p>
                  This app was my first iOS app. It was written in Objective-C, HTML, CSS,
                  and JavaScript.
                </p>
                <p>
                  <Link to='/projects/london-travel-guide' className='MoreInformation'>
                    More Information
                  </Link>
                </p>
              </Col>
            </Row>
          </ContentGrid>
        </div>
      </CategoryDetailView>
    );
  }
}
