// Contact

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './Contact.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';
import { supportsSVG, isIE10OrOlder } from '../../utilities/FeatureDetection/FeatureDetection';
import $ from 'jquery';
const request = require('superagent');

const socialMediaImageBasePath = 'src/components/Contact/images/';

const socialMedia = [
  {
    title: 'Behance',
    url: 'https://www.behance.net/tonikarttunen',
    imageFilename: 'behance'
  },
  {
    title: 'GitHub',
    url: 'https://github.com/tonikarttunen',
    imageFilename: 'github'
  },
  {
    title: 'Medium',
    url: 'https://medium.com/@tonikarttunen',
    imageFilename: 'medium'
  },
  {
    title: 'Twitter',
    url: 'https://twitter.com/tonikarttunen',
    imageFilename: 'twitter'
  },
  {
    title: 'Instagram',
    url: 'http://instagram.com/tonikarttunen',
    imageFilename: 'instagram'
  },
  {
    title: '500px',
    url: 'http://500px.com/tonikarttunen',
    imageFilename: '500px'
  },
  {
    title: 'YouTube',
    url: 'https://www.youtube.com/user/tk1tk2tk3/',
    imageFilename: 'youtube'
  },
  {
    title: 'Email',
    url: 'mailto:toni.antero.karttunen@gmail.com?subject=Hello',
    imageFilename: 'mail'
  }
];

@withStyles(styles)
export default class Contact extends React.Component {
  componentDidMount() {
    if (supportsSVG() && !isIE10OrOlder()) {
      socialMedia.map(media => {
        request
        .get(staticPath(socialMediaImageBasePath + 'SVG/' + media.imageFilename + '.svg'))
        .end((err, res) => {
          if (!err) {
            $('#ContactSocialMedia' + media.title).html(res.text);
          }
        });
      });
    }
  }

  render() {
    return (
      <Grid componentClass='section' className='Contact'>
        <Row>
          {
            socialMedia.map(media => {
              return (
                <a key={media.title} href={media.url}>
                  <Col md={3} sm={6} className='ContactRow'>
                    <div id={'ContactSocialMedia' + media.title} className='InlineBlock IconContainer'>
                      {
                        (() => {
                          if (!supportsSVG() || isIE10OrOlder()) {
                            return (
                              <img
                                src={staticPath(socialMediaImageBasePath + 'PNG/' + media.imageFilename + '.png')}
                                alt=''
                              />
                            ) 
                          }
                        })()
                      }
                    </div>
                    <div className='InlineBlock TextContainer'>
                      {media.title}
                    </div>
                  </Col>
                </a>
              );
            })
          }
        </Row>
      </Grid>
    );
  }
}
