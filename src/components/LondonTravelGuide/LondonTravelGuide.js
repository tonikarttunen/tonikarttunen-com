// London Travel Guide

import React from 'react/addons';
import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';
import styles from './LondonTravelGuide.less';
import withStyles from '../../decorators/withStyles';
import { staticPath } from '../../utilities/static/StaticPath';
import ProjectDetailView from '../../components/ProjectDetailView';

@withStyles(styles)
export default class LondonTravelGuide extends React.Component {
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
    const IMAGE_PATH_PREFIX = 'src/components/LondonTravelGuide/images/';

    return (
      <ProjectDetailView>
        <section className="LondonTravelGuide">
          <Grid>
            <h2>London Travel Guide</h2>

            <Carousel
              activeIndex={this.state.index}
              direction={this.state.direction}
              onSelect={this.handleSelect}
            >
              <CarouselItem>
                <img
                  width={440}
                  height={660}
                  alt="App home view"
                  src={staticPath(IMAGE_PATH_PREFIX + 'Home_660.jpg')}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  width={440}
                  height={660}
                  alt="Architecture"
                  src={staticPath(IMAGE_PATH_PREFIX + 'Architecture_660.jpg')}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  width={440}
                  height={660}
                  alt="Music, theatre and cinema"
                  src={staticPath(IMAGE_PATH_PREFIX + 'MusicTheatreAndCinema_660.jpg')}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  width={440}
                  height={660}
                  alt="Tower Bridge"
                  src={staticPath(IMAGE_PATH_PREFIX + 'TowerBridge_660.jpg')}
                />
              </CarouselItem>
              <CarouselItem>
                <img
                  width={440}
                  height={660}
                  alt="Currency converter"
                  src={staticPath(IMAGE_PATH_PREFIX + 'CurrencyConverter_660.jpg')}
                />
              </CarouselItem>
            </Carousel>

            <Row>
              <Col md={4} className="InfoBox">
                <h3>Summer</h3>
                <p>2012</p>
                <h3>Technologies</h3>
                <p>Objective-C, HTML, CSS, JavaScript</p>
              </Col>
              <Col md={8}>
                <p>
                  This app was my first iOS app. The development process began
                  in June 2012 and ended in August 2012. Even though it wasn't
                  a masterpiece in terms of software design, I learned a lot
                  while developing the app.
                </p>
              </Col>
            </Row>
          </Grid>
        </section>
      </ProjectDetailView>
    );
  }
}
