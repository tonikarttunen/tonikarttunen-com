// Personal Finance

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';
import styles from './PersonalFinance.less';
import withStyles from '../../decorators/withStyles';
import DiagonalDivider from '../../components/DiagonalDivider';
import { staticPath } from '../../utilities/static/StaticPath';
import ProjectDetailView from '../../components/ProjectDetailView';

@withStyles(styles)
export default class PersonalFinance extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      index: 0,
      direction: null
    };

    // React >= 0.13.x does not autobind non-React methods to 'this'
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({ // eslint-disable-line react/no-set-state
      index: selectedIndex,
      direction: selectedDirection
    });
  }

  render() {
    const IMAGE_PATH_PREFIX = 'src/components/PersonalFinance/images/';

    return (
      <DocumentTitle title='Personal Finance — Toni Karttunen'>
        <ProjectDetailView>
          <section className="PersonalFinance">
            <Grid>
              <h2>Personal Finance</h2>

              <Carousel
                activeIndex={this.state.index}
                direction={this.state.direction}
                onSelect={this.handleSelect}
              >
                <CarouselItem>
                  <img
                    width={440}
                    height={660}
                    alt="220x330"
                    src={staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance-1.jpg')}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    width={440}
                    height={660}
                    alt="220x330"
                    src={staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance-2.jpg')}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    width={440}
                    height={660}
                    alt="220x330"
                    src={staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance-3.jpg')}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    width={440}
                    height={660}
                    alt="220x330"
                    src={staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance-4.jpg')}
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    width={440}
                    height={660}
                    alt="220x330"
                    src={staticPath(IMAGE_PATH_PREFIX + 'Personal-Finance-5.jpg')}
                  />
                </CarouselItem>
              </Carousel>

              <Row>
                <Col md={4} className="InfoBox">
                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                    <h3>Autumn</h3>
                    <p>2012</p>
                  </div>
                  <DiagonalDivider
                    id={'DiagonalDividerPersonalFinance'}
                    className='InlineBlock WidthAuto VerticalAlignTop'
                    color={'#6CCFAC'}
                  />
                  <div className='InlineBlock WidthAuto VerticalAlignTop'>
                    <h3>Spring</h3>
                    <p>2013</p>
                  </div>
                  <h3>Technology</h3>
                  <p>Objective-C</p>
                </Col>
                <Col md={8}>
                  <p>
                    I developed this app prototype for my studies
                    (User Interface Construction class at Aalto University, Finland).
                    The task was to develop a prototype of a personal financial
                    management application.
                  </p>
                  <p>
                    Since financial services usually have a very large target audience,
                    one of the main goals of this project was to develop the app so
                    that it would be accessible to all the possible user groups,
                    including visually impaired and color blind users.
                  </p>
                </Col>
              </Row>
            </Grid>
          </section>
        </ProjectDetailView>
      </DocumentTitle>
    );
  }
}

