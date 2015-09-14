// BlogDetail

import React from 'react/addons';
import { Grid, Row, Col } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import styles from './BlogDetail.less';
import withStyles from '../../../decorators/withStyles';
import $ from 'jquery';

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
      title: 'Post 1',
      date: '2015-10-01 15:00',
      intro: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      body_text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    };

    return (
      <DocumentTitle title={blogPost.title + ' — Blog — Toni Karttunen'}>
        <Grid className='Blog BlogDetail' componentClass='article'>
          <h2>{blogPost.title}</h2>
            <Row>
              <Col md={4}>
                <p className='lead'>Published</p>
                <p>{blogPost.date}</p>
                <p className='lead'>Author</p>
                <p>Toni Karttunen</p>
              </Col>
              <Col md={8}>
                <p className='lead'>{blogPost.intro}</p>
                <p>{blogPost.body_text}</p>
              </Col>
            </Row>
        </Grid>
      </DocumentTitle>
    );
  }
}
