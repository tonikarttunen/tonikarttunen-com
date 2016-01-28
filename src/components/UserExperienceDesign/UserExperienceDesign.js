// UserExperienceDesign

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { Row, Col } from 'react-bootstrap';
import styles from './UserExperienceDesign.less';
import withStyles from '../../decorators/withStyles';
import CategoryDetailView from '../../components/CategoryDetailView';
import ContentGrid from '../../components/ContentGrid';
import DetailViewCover from '../../components/DetailViewCover';
import { staticPath } from '../../utilities/static/StaticPath';
import { supportsSVG, isIE10OrOlder } from '../../utilities/FeatureDetection/FeatureDetection';
import Vivus from 'vivus';
import $ from 'jquery';
const request = require('superagent');

@withStyles(styles)
export default class UserExperienceDesign extends React.Component {
  constructor(props) {
    super(props);

    this.svgAnimation = null;
    this.insertSVG.bind(this);
    this.animateSVG.bind(this);
    this.loadSVG.bind(this);
  }

  componentDidMount() {
    if (supportsSVG() === true) {
      if (isIE10OrOlder() === false) {
        this.loadSVG();
      } else {
        // Disable SVG animations in IE 10 and older because of errors that occur
        // when unmounting the component. SVG animations work fine in IE 11 and MS Edge.
        $('#UserExperienceDesignDetailViewCoverImage').html(
          '<img alt="User Experience Design" src="' +
          staticPath('src/components/Cover/images/User-Experience-Design-Cover-Thin.svg') +
          '"/>'
        );
      }
    } else {
      $('#UserExperienceDesignDetailViewCoverImage').html(
        '<img alt="User Experience Design" src="' +
        staticPath('src/components/Cover/images/User-Experience-Design-Cover-Thin.png') +
        '"/>'
      );
    }
  }

  componentWillUnmount() {
    if (this.svgAnimation) {
      this.svgAnimation.stop().reset();
    }
  }

  insertSVG() {
    if (this.svgAnimation) {
      this.svgAnimation.stop();
    }

    request
    .get(staticPath('src/components/Cover/images/User-Experience-Design-Cover-Thin.svg'))
    .end((err, res) => {
      if (!err) {
        $('#UserExperienceDesignDetailViewCoverImage').html(res.text);
      }
    });
  }

  animateSVG() {
    this.svgAnimation = new Vivus(
      'User-Experience-Design-Cover-SVG',
      {
        type: 'async',
        start: 'autostart',
        duration: 105,
        animTimingFunction: Vivus.EASE_OUT
      },
      this.insertSVG
    );
  }

  loadSVG() {
    request
    .get(staticPath('src/components/Cover/images/User-Experience-Design-Cover-Thin-Paths.svg'))
    .end((err, res) => {
      if (err) {
        this.insertSVG();
      } else {
        $('#UserExperienceDesignDetailViewCoverImage').html(res.text);
        this.animateSVG();
      }
    });
  }

  render() {
    const servicesTitle = 'User-Centred Design Methods';
    const toolsTitle = 'Design Tool Usage Skills';
    const projectsTitle = 'Related Projects';

    return (
      <DocumentTitle title='User Experience Design — Toni Karttunen'>
        <CategoryDetailView>
          <DetailViewCover
            title={'User Experience Design'}
            coverClassName={'UserExperienceDesignDetailViewCover'}
          >
            <div id='UserExperienceDesignDetailViewCoverImage'/>
          </DetailViewCover>
          <div className='UserExperienceDesign'>
            <ContentGrid title={servicesTitle}>
              <Row>
                <Col md={4}>
                  <h4>Usability Evaluation</h4>
                  <p>
                    I have conducted traditional usability tests in a usability
                    lab and more informal "lean" user tests during my studies at Aalto
                    University. I have also gained some experience in doing expert reviews
                    with e.g. back-of-the-envelope action analysis and usability
                    guidelines during my studies. For more information,
                    view the <em>related projects</em> at the end of this page.
                  </p>
                </Col>
                <Col md={4}>
                  <h4>User Interface Design, Wireframing &amp; Prototyping</h4>
                  <p>
                    I have designed user interfaces for web apps (for example, I
                    designed large parts
                    of <Link to='/projects/viima-mobile-user-interface'>
                      Viima mobile user interface
                    </Link>)
                    and mobile apps (<Link to='/projects/helsinkigraph'>
                      1
                    </Link>, <Link to='/projects/b-sc-thesis'>
                      2
                    </Link>, <Link to='/projects/personal-finance'>
                      3
                    </Link>, <Link to='/projects/london-travel-guide'>
                      4
                    </Link>).
                    I have also learned how to create wireframes and prototypes
                    (including clickable prototypes and paper prototypes).
                  </p>
                </Col>
                <Col md={4}>
                  <h4>User Research</h4>
                  <p>
                    I am familiar with common user research methods, such as observation
                    and user surveys. I have conducted some user research in
                    the <Link to='/projects/internet-of-things-solutions-for-lansimetro'>
                      Länsimetro Internet of Things project
                    </Link> in the Strategic User-Centred Design course at Aalto University.
                  </p>
                </Col>
              </Row>
            </ContentGrid>

            <ContentGrid title={toolsTitle}>
              <Row>
                <Col md={4}>
                  <h4>Visual Design</h4>
                  <p>
                    I usually use Adobe Illustrator and Adobe Photoshop for visual design.
                    Because it is important to support multiple screen resolutions and
                    to be able to export user interface design assets to SVG format nowadays,
                    I have been using Illustrator more than Photoshop for user interface design
                    lately.
                  </p>
                </Col>
                <Col md={4}>
                  <h4>Clickable Prototypes</h4>
                  <p>
                    I have little experience in using Axure for prototyping (we used it in the&nbsp;
                    <Link to='/projects/aalto-mycourses-usability-evaluation'>
                      Aalto MyCourses usability evaluation project
                    </Link>). I have also created some prototypes by just writing code for the
                    target platform (e.g. in HTML or in Objective-C).
                  </p>
                </Col>
                <Col md={4}>
                  <h4>Animation &amp; Motion Graphics</h4>
                  <p>
                    I have some experience in using Adobe After Effects for motion graphics.
                    I have also used Apple Keynote for prototyping simple animations.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <h4>Wireframing Tools</h4>
                  <p>
                    I have used Adobe Illustrator and Balsamiq Mockups for wireframing.
                  </p>
                </Col>
              </Row>
            </ContentGrid>

            <ContentGrid title={projectsTitle}>
              <Row>
                <Col md={4}>
                  <h4>Viima Mobile User Interface</h4>
                  <p>
                    Viima is a browser-based tool that can be used
                    as a feedback system and as an internal innovation platform within Viima's
                    client companies.
                    During the project, my tasks included user interface design (both low-fidelity
                    wireframing and high-fidelity visual design with Adobe Illustrator),
                    usability testing, front-end software development, and testing.
                  </p>
                  <p>
                    <Link to='/projects/viima-mobile-user-interface' className='MoreInformation'>
                      More Information
                    </Link>
                  </p>
                </Col>
                <Col md={4}>
                  <h4>Aalto MyCourses Usability Evaluation</h4>
                  <p>
                    In this project, we evaluated the usability of the Aalto MyCourses mobile
                    user interface with user tests and expert reviews. We also created a
                    clickable prototype that solved many usability issues that were confronted
                    in user tests and expert reviews.
                  </p>
                  <p>
                    <Link to='/projects/aalto-mycourses-usability-evaluation' className='MoreInformation'>
                      More Information
                    </Link>
                  </p>
                </Col>
                <Col md={4}>
                  <h4>Internet of Things Solutions for Länsimetro</h4>
                  <p>
                    In this project, our task was to explore ways for utilizing Internet of Things
                    to improve the usage experience of the upcoming Länsimetro Matinkylä station.
                    The project included doing user research, ideation, paper prototyping and
                    quick user testing.
                  </p>
                  <p>
                    <Link to='/projects/internet-of-things-solutions-for-lansimetro' className='MoreInformation'>
                      More Information
                    </Link>
                  </p>
                </Col>
              </Row>
              <Row>
                <Col md={4}>
                  <h4>Navigation While Running: Understanding Mobile User Experience</h4>
                  <p>
                    The goal of the project was to gain understanding of what types of
                    navigational aids runners need while exercising. We wanted to know,
                    whether or not mobile devices are useful tools for runners when
                    navigating in an unfamiliar environment.
                  </p>
                  <p>
                    <Link
                      to='/projects/navigation-while-running-understanding-mobile-user-experience'
                      className='MoreInformation'
                    >
                      More Information
                    </Link>
                  </p>
                </Col>
              </Row>
            </ContentGrid>
          </div>
        </CategoryDetailView>
      </DocumentTitle>
    );
  }
}
