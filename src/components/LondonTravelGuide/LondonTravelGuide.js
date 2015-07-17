// London Travel Guide

import React from 'react/addons';
import { Carousel, CarouselItem, Grid, Row, Col } from 'react-bootstrap';
import styles from './LondonTravelGuide.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class LondonTravelGuide extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 0,
      direction: null
    };

    // React >= 0.13.x does not autobind non-React methods to 'this'
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedIndex, selectedDirection) {
    this.setState({
      index: selectedIndex,
      direction: selectedDirection
    });
  }

  render() {
    return (
      <section className="LondonTravelGuide">
        <Grid>
          <h2>London Travel Guide</h2>

          <Carousel
            activeIndex={this.state.index}
            direction={this.state.direction}
            onSelect={this.handleSelect}>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt="220x330"
                src={require('./images/Home_660.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt="220x330"
                src={require('./images/Architecture_660.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt="220x330"
                src={require('./images/MusicTheatreAndCinema_660.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt="220x330"
                src={require('./images/TowerBridge_660.jpg')} />
            </CarouselItem>
            <CarouselItem>
              <img
                width={440}
                height={660}
                alt="220x330"
                src={require('./images/CurrencyConverter_660.jpg')} />
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
    );
  }
}
