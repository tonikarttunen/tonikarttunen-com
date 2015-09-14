// BlogDetail

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import styles from './BlogDetail.less';
import withStyles from '../../../decorators/withStyles';
const marked = require('marked');

@withStyles(styles)
export default class BlogDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  componentWillUnmount() {

  }

  render() {
    const blogPost = {
      title: 'Post *1*',
      date: {
        weekDay: 'Monday',
        year: 2015,
        month: 10,
        day: 1,
        hours: 15,
        minutes: 0,
        seconds: 1.500
      },
      categories: [
        {
          name: 'Design',
          url: '/categories/design'
        }
      ],
      intro: 'Lorem __*ipsum*__ dolor *sit* amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      body: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.\n\nNemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    };

    const title = {__html: marked('# ' + blogPost.title)};
    const intro = {__html: marked(blogPost.intro)};
    const body = {__html: marked(blogPost.body)};
    const documentTitle = blogPost.title.replace(/\_|\*/g, '') + ' — Blog — Toni Karttunen';

    return (
      <DocumentTitle title={documentTitle}>
        <Grid className='Blog BlogDetail' componentClass='article'>
          <span dangerouslySetInnerHTML={title}/>
            <Row>
              <Col md={4}>
                <p className='lead'>Published</p>
                <p>{blogPost.date.year}</p>
                <p className='lead'>Filed in</p>
                <p>Design</p>
              </Col>
              <Col md={8}>
                <span className='lead' dangerouslySetInnerHTML={intro}/>
                <span dangerouslySetInnerHTML={body}/>
              </Col>
            </Row>
        </Grid>
      </DocumentTitle>
    );
  }
}
