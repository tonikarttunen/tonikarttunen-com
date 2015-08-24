// Cover

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';
import { supportsSVG } from '../../utilities/FeatureDetection/FeatureDetection';
import Vivus from 'vivus';
import $ from 'jquery';
const request = require('superagent');

function insertSVG(titleImageFileName, selectorName) {
  request
  .get(staticPath(titleImageFileName + '.svg'))
  .end((err, res) => {
    if (!err) {
      $(selectorName).html(res.text);
    }
  });
}

function animateSVG(titleImageFileName, selectorName, elementId) {
  return new Vivus(
    elementId,
    {
      type: 'delayed',
      duration: 85,
      animTimingFunction: Vivus.EASE
    },
    function() { insertSVG(titleImageFileName, selectorName); }
  );
}

@withStyles(styles)
export default class Cover extends React.Component {
  static propTypes = {
    coverClassName: React.PropTypes.string,
    url: React.PropTypes.string,
    isLastElement: React.PropTypes.bool,
    sectionId: React.PropTypes.number,
    titleImageFileName: React.PropTypes.string
  };

  constructor(props) {
    super(props);

    this.svgAnimation = null;
  }

  componentDidMount() {
    const selectorName = '.' + this.props.coverClassName + ' .SectionTitleResponsiveElement';
    const titleImageFileName = this.props.titleImageFileName;
    const elementId = this.props.coverClassName + '-SVG';
    var self = this;

    if (supportsSVG() === true) {
      request
      .get(staticPath(titleImageFileName + '-Outline.svg'))
      .end((err, res) => {
        if (!err) {
          $(selectorName).html(res.text);

          this.svgAnimation = new Vivus(
            elementId,
            {
              type: 'delayed',
              duration: 85,
              animTimingFunction: Vivus.EASE
            },
            function() { insertSVG(titleImageFileName, selectorName); }
          );
        }
      });
    } else {
      $(selectorName).html('<img alt="" src="' + staticPath(titleImageFileName + '.png') + '"/>');
    }
  }

  componentWillUnmount() {
    if (this.svgAnimation) {
      this.svgAnimation.stop().reset();
    }
  }

  render() {
    /*
    const navigationBarHeight = 50;

    const scrollToNextSectionArrow =
    (this.props.isLastElement === false) ?
    (
      <div className='ScrollToNextSectionArrow'>
        <span
          className='ion-chevron-down ScrollToNextSectionArrowButton'
          onClick={() => {
            const currentSectionNumber = this.props.sectionId;

            const destination = '#section' + (currentSectionNumber + 1);
            $('html, body').animate({
                scrollTop: $(destination).offset().top - navigationBarHeight
            }, 500);
          }}
        />
      </div>
    ) :
    '';
    */

    return (
      <div
        className={'Cover container-fluid ' + this.props.coverClassName}
        id={'section' + this.props.sectionId}>
        <Grid className='CoverInner'>
          <Row>
            <Col md={12}>
              <Link to={this.props.url} className='SectionTitleContainer'>
                <div
                  className='SectionTitleResponsiveElement'
                  id={this.props.coverClassName + 'SectionTitleResponsiveElement'}
                />
              </Link>
              <Link to={this.props.url} className='MoreInformation'>More Information</Link>
            </Col>
          </Row>
        </Grid>
        {/* scrollToNextSectionArrow */}
      </div>
    );
  }
}
