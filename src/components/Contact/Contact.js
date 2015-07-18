// Contact

import React from 'react/addons';
import styles from './Contact.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class Contact {
  render() {
    return (
      <section className='Contact container'>
        <a href='https://github.com/tonikarttunen/'>
          <div className='ContactRow'>
            <div className='InlineBlock IconContainer'>
              <span className='ion-social-github'/>
            </div>
            <div className='InlineBlock TextContainer'>
              GitHub
            </div>
          </div>
        </a>
        <a href='https://twitter.com/tonikarttunen'>
          <div className='ContactRow'>
            <div className='InlineBlock IconContainer'>
              <span className='ion-social-twitter'/>
            </div>
            <div className='InlineBlock TextContainer'>
              Twitter
            </div>
          </div>
        </a>
        <a href='http://instagram.com/tonikarttunen'>
          <div className='ContactRow'>
            <div className='InlineBlock IconContainer'>
              <span className='ion-social-instagram'/>
            </div>
            <div className='InlineBlock TextContainer'>
              Instagram
            </div>
          </div>
        </a>
        <a href='http://500px.com/toni_karttunen'>
          <div className='ContactRow'>
            <div className='InlineBlock IconContainer'>
              <span className='icon-500px'/>
            </div>
            <div className='InlineBlock TextContainer'>
              500px
            </div>
          </div>
        </a>
      </section>
    );
  }
}
