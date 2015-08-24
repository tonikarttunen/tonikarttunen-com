// Cover

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Cover extends React.Component {
  static propTypes = {
    coverClassName: React.PropTypes.string,
    url: React.PropTypes.string,
    isLastElement: React.PropTypes.bool,
    sectionId: React.PropTypes.number
  };

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
                <div className='SectionTitleResponsiveOuterElement'>
                  <div className='SectionTitleResponsiveInnerElement'/>
                </div>
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
