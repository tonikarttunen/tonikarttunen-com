// Cover

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';
import { supportsSVG, isIE10OrOlder } from '../../utilities/FeatureDetection/FeatureDetection';
import $ from 'jquery';
const request = require('superagent');
const marked = require('marked');

@withStyles(styles)
export default class Cover extends React.Component {
  static propTypes = {
    item: React.PropTypes.shape({
      title: React.PropTypes.string,
      punch_line: React.PropTypes.string,
      intro: React.PropTypes.string,
      date: React.PropTypes.object,
      type: React.PropTypes.string,
      size: React.PropTypes.string,
      position: React.PropTypes.string,
      cover_background_color: React.PropTypes.string,
      cover_background_image_url: React.PropTypes.string
    })
  };

  render() {
    const title = {__html: marked('# ' + this.props.item.title)};
    const intro = {__html: marked(this.props.item.intro)};
    const punch_line =
    !!this.props.item.punch_line ?
    {__html: marked(this.props.item.punch_line)} : {__html: null};

    let className = this.props.type === 'compact' ? 'Cover Compact' : 'Cover';
    if (this.props.position && this.props.position === 'NotTopOfThePage') {
      className += ' NotTopOfThePage';
    }
    if (!!this.props.size) {
      className += ' ' + this.props.size;
    }

    let style = {};
    if (!!this.props.item.cover_background_color) {
      style.backgroundColor = this.props.item.cover_background_color;
    }
    if (!!this.props.item.cover_background_image_url) {
      style.backgroundImage = 'url(\"' + this.props.item.cover_background_image_url + '\")';
    }

    let awards = null;
    if (this.props.item.awards_and_honours && this.props.item.awards_and_honours.length > 0) {
      awards = (
        <div className='AwardsAndHonours'>
          <span dangerouslySetInnerHTML={{__html: marked(this.props.item.awards_and_honours)}}/>
        </div>
      );
    }

    let date = null;
    switch (this.props.type) {
    case 'project': {
      const formattedStartDate = this.props.item.date.start.season.charAt(0).toUpperCase() + this.props.item.date.start.season.slice(1) + ' ' + this.props.item.date.start.year.toString();
      const formattedEndDate = this.props.item.date.end.season + ' ' + this.props.item.date.end.year.toString();
      date = this.props.item.date.start.year === this.props.item.date.end.year && this.props.item.date.start.season === this.props.item.date.end.season ?
      formattedStartDate : formattedStartDate + '–' + formattedEndDate;
      break;
    }

    case 'blog': {
      date =
      this.props.item.date.last_saved_date.day + ' ' +
      this.props.item.date.last_saved_date.month_name_abbreviation + ' ' +
      this.props.item.date.last_saved_date.year;
      break;
    }

    default: {
      break;
    }
    }

    return (
      <div className={className} style={style}>
        <div className='CoverContents'>
          <Grid>
            <Row>
              <Col xs={12}>
                <div className='PunchLine' dangerouslySetInnerHTML={punch_line}/>
                <div className='Divider'/>
                <span dangerouslySetInnerHTML={title}/>
                {
                  () => {
                    if (this.props.size && this.props.size === 'FullHeight') {
                      return (
                        <span>
                          <span className='lead' dangerouslySetInnerHTML={intro}/>
                          {awards}
                          <p className='Date'>
                            {date}
                          </p>
                        </span>
                      )
                    } else if (this.props.size && this.props.size === 'Medium') {
                      return <span>{awards}</span>;
                    }
                  }()
                }
              </Col>
            </Row>
          </Grid>
        {/* Down Arrow */}
        </div>
      </div>
    );
  }
}
