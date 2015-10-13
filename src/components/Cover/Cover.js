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
    this.insertSVG.bind(this);
  }

  componentDidMount() {
    const selectorName = '.' + this.props.coverClassName + ' .SectionTitleResponsiveElement';
    const titleImageFileName = this.props.titleImageFileName;
    const elementId = this.props.coverClassName + '-SVG';

    if (supportsSVG() === true) {
      try {
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
              () => { this.insertSVG(titleImageFileName, selectorName); }
            );
          }
        });
      } catch (e) {
        // Loading an SVG file with an XHR will fail in IE 9
        $(selectorName).html('<img alt="" src="' + staticPath(titleImageFileName + '.svg') + '"/>');
      }
    } else {
      $(selectorName).html('<img alt="" src="' + staticPath(titleImageFileName + '.png') + '"/>');
    }
  }

  componentWillUnmount() {
    if (this.svgAnimation) {
      this.svgAnimation.stop().reset();
    }
  }

  insertSVG(titleImageFileName, selectorName) {
    if (this.svgAnimation) {
      this.svgAnimation.stop().reset();
    }

    request
    .get(staticPath(titleImageFileName + '.svg'))
    .end((err, res) => {
      if (!err) {
        $(selectorName).html(res.text);
      }
    });
  }

  render() {
    return (
      <div
        className={'Cover container-fluid ' + this.props.coverClassName}
        id={'section' + this.props.sectionId}
      >
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
      </div>
    );
  }
}
