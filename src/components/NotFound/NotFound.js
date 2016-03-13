// Not found (404 error) page

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import styles from './NotFound.less';
import Cover from '../../components/Cover';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class NotFound {
  render() {
    const item = {
      punch_line: 'Error',
      title: 'Page Not Found',
      intro: 'The page may have been deleted or you may have followed a broken link.',
      cover_background_color: 'rgb(51, 148, 184)',
      date: {
        start: {
          season: '',
          year: ''
        },
        end: {
          season: '',
          year: ''
        }
      }
    };

    return (
      <DocumentTitle title='Page Not Found — Toni Karttunen'>
        <section className='NotFound'>
          <Cover item={item} type={'error'}/>
        </section>
      </DocumentTitle>
    );
  }
}
