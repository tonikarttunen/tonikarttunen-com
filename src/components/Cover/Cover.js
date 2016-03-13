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
  render() {
    const title = {__html: marked('# ' + this.props.item.title)};
    const intro = {__html: marked(this.props.item.intro)};

    return (
      <div className='Cover'>
        <div className='CoverContents'>
          <Grid>
            <Row>
              <Col xs={12}>
                <div className='PunchLine'>
                  Punch line + bottom border
                </div>
                <span dangerouslySetInnerHTML={title}/>
                <span className='lead' dangerouslySetInnerHTML={intro}/>
                <p className='Date'>
                  16 Jan 2016
                </p>
                <p className='AwardsAndHounours'>
                  Accenture Quality Award Finalist
                </p>
              </Col>
            </Row>
          </Grid>
        {/* Down Arrow */}
        </div>
      </div>
    );
  }
}
