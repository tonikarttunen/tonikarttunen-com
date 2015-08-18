// DetailViewCover

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './DetailViewCover.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class DetailViewCover extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    coverClassName: React.PropTypes.string,
    children: React.PropTypes.node
  };

  render() {

    return (
      <div className={'DetailViewCover ' + this.props.coverClassName}>
        <Grid>
          <Row>
            <Col md={12} className='DetailViewCoverContents'>
              <h2>{this.props.title}</h2>
              {this.props.children}
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
