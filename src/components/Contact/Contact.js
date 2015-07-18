// Contact

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Contact.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Contact {
  render() {
    return (
      <Grid componentClass='section' className='Contact'>
        <Row>
          <a href='https://github.com/tonikarttunen/'>
            <Col md={3} sm={6} className='ContactRow'>
              <div className='InlineBlock IconContainer'>
                <span className='ion-social-github'/>
              </div>
              <div className='InlineBlock TextContainer'>
                GitHub
              </div>
            </Col>
          </a>
          <a href='https://twitter.com/tonikarttunen'>
            <Col md={3} sm={6} className='ContactRow'>
              <div className='InlineBlock IconContainer'>
                <span className='ion-social-twitter'/>
              </div>
              <div className='InlineBlock TextContainer'>
                Twitter
              </div>
            </Col>
          </a>
          <a href='http://instagram.com/tonikarttunen'>
            <Col md={3} sm={6} className='ContactRow'>
              <div className='InlineBlock IconContainer'>
                <span className='ion-social-instagram'/>
              </div>
              <div className='InlineBlock TextContainer'>
                Instagram
              </div>
            </Col>
          </a>
          <a href='http://500px.com/toni_karttunen'>
            <Col md={3} sm={6} className='ContactRow'>
              <div className='InlineBlock IconContainer'>
                <span className='icon-500px'/>
              </div>
              <div className='InlineBlock TextContainer'>
                500px
              </div>
            </Col>
          </a>
        </Row>
      </Grid>
    );
  }
}
