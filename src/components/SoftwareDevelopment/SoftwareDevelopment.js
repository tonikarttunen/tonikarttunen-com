// SoftwareDevelopment

import React from 'react/addons';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import styles from './SoftwareDevelopment.less';
import withStyles from '../../decorators/withStyles';
import CategoryDetailView from '../../components/CategoryDetailView';
import ContentGrid from '../../components/ContentGrid';
import DetailViewCover from '../../components/DetailViewCover';
import { staticPath } from '../../utilities/static/StaticPath';
import { supportsSVG } from '../../utilities/FeatureDetection/FeatureDetection';
import Vivus from 'vivus';
import $ from 'jquery';
const request = require('superagent');

@withStyles(styles)
export default class SoftwareDevelopment extends React.Component {
  constructor(props) {
    super(props);

    this.svgAnimation = null;
    this.insertSVG.bind(this);
    this.animateSVG.bind(this);
    this.loadSVG.bind(this);
  }

  componentDidMount() {
    if (supportsSVG() === true) {
      this.loadSVG();
    } else {
      $('#SoftwareDevelopmentDetailViewCoverImage').html(
        '<img alt="Software Development" src="' +
        staticPath('src/components/Cover/images/Software-Development-Cover.png') +
        '"/>'
      );
    }
  }

  insertSVG() {
    request
    .get(staticPath('src/components/Cover/images/Software-Development-Cover.svg'))
    .end((err, res) => {
      if (!err) {
        $('#SoftwareDevelopmentDetailViewCoverImage').html(res.text);
      }
    });
  }

  animateSVG() {
    if (supportsSVG() === true) {
      this.svgAnimation = new Vivus(
        'Software-Development-Cover-SVG',
        {
          type: 'async',
          duration: 110,
          animTimingFunction: Vivus.EASE_OUT
        },
        this.insertSVG
      );
    }
  }

  loadSVG() {
    request
    .get(staticPath('src/components/Cover/images/Software-Development-Cover-Paths.svg'))
    .end((err, res) => {
      if (err) {
        this.insertSVG();
      } else {
        $('#SoftwareDevelopmentDetailViewCoverImage').html(res.text);
        this.animateSVG();
      }
    });
  }

  render() {
    const servicesTitle = 'Programming Experience';
    const projectsTitle = 'Related Projects';

    return (
      <CategoryDetailView>
        <DetailViewCover
          title={'Software Development'}
          coverClassName={'SoftwareDevelopmentDetailViewCover'}>
          <div id='SoftwareDevelopmentDetailViewCoverImage'/>
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
