// ContentGrid

import React, { PropTypes } from 'react/addons';  // eslint-disable-line no-unused-vars
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './ContentGrid.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class ContentGrid extends React.Component {
  static propTypes = {
    title: React.PropTypes.string,
    children: React.PropTypes.node
  };

  render() {

    return (
      <Grid className='ContentGrid'>
        <Row>
          <Col md={12}>
            <h3>{this.props.title}</h3>
          </Col>
        </Row>
        {this.props.children}
      </Grid>
    );
  }
}
