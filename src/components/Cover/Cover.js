// Cover

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';
import withViewport from '../../decorators/withViewport';
import $ from 'jquery';

@withViewport
@withStyles(styles)
export default class Cover extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    description: React.PropTypes.string,
    coverClassName: React.PropTypes.string,
    url: React.PropTypes.string,
    backgroundImageUrl: React.PropTypes.string,
    isLastElement: React.PropTypes.bool,
    sectionId: React.PropTypes.number,
    viewport: React.PropTypes.shape({
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    const navigationBarHeight = 50;
    let { width, height } = this.props.viewport;

    let coverStyle = {
      width: width,
      height: height - navigationBarHeight
    };

    const scrollToNextSectionArrow =
    this.props.isLastElement ?
    '' :
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
    );

    return (
      <div
        className={'Cover container-fluid ' + this.props.coverClassName} style={coverStyle}
        id={'section' + this.props.sectionId}>
        <Grid className='CoverInner'>
          <Row>
            <Col md={12}>
              <Link to={this.props.url} className='SectionTitle'>{this.props.title}</Link>
              <p>{this.props.description}</p>
              <Link to={this.props.url} className='MoreInformation'>More Information</Link>
            </Col>
          </Row>
        </Grid>
        {scrollToNextSectionArrow}
      </div>
    );
  }
}
