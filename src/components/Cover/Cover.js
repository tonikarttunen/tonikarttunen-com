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
    isLastElement: React.PropTypes.bool,
    isFullSizeCover: React.PropTypes.bool,
    sectionId: React.PropTypes.number,
    viewport: React.PropTypes.shape({
      width: React.PropTypes.number.isRequired,
      height: React.PropTypes.number.isRequired
    }).isRequired
  };

  render() {
    const navigationBarHeight = 50;
    let coverStyle = {};

    if (this.props.isFullSizeCover === true) {
      let { width, height } = this.props.viewport;

      coverStyle = {
        width: width,
        height: height - navigationBarHeight
      };
    }

    const scrollToNextSectionArrow =
    ((this.props.isFullSizeCover === true) && (this.props.isLastElement === false)) ?
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

    const title = {__html: this.props.title};

    const textContents =
    (this.props.isFullSizeCover) ?
    (
      <span>
        <Link to={this.props.url} className='SectionTitle'>
          <span dangerouslySetInnerHTML={title}/>
        </Link>
        <p>{this.props.description}</p>
        <Link to={this.props.url} className='MoreInformation'>More Information</Link>
      </span>
    ) :
    (
      <span className='SectionTitle' dangerouslySetInnerHTML={title}/>
    );

    const outerElementClassName = (this.props.isFullSizeCover === true) ? '' : ' DetailView';
    const innerElementClassName = (this.props.isFullSizeCover === true) ? '' : ' DetailView';

    return (
      <div
        className={'Cover container-fluid ' + this.props.coverClassName + outerElementClassName}
        style={coverStyle}
        id={'section' + this.props.sectionId}>
        <Grid className={'CoverInner' + innerElementClassName}>
          <Row>
            <Col md={12}>
              {textContents}
            </Col>
          </Row>
        </Grid>
        {scrollToNextSectionArrow}
      </div>
    );
  }
}
