// Personal Finance

import React from 'react/addons';
import { Carousel, CarouselItem } from 'react-bootstrap';
import styles from './PersonalFinance.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

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
      <section className="PersonalFinance">
        <h2>Personal Finance App Prototype</h2>

        <Carousel
          activeIndex={this.state.index}
          direction={this.state.direction}
          onSelect={this.handleSelect}>
          <CarouselItem>
            <img
              width={440}
              height={660}
              alt="220x330"
              src={require('./images/Personal-Finance-1.jpg')} />
          </CarouselItem>
          <CarouselItem>
            <img
              width={440}
              height={660}
              alt="220x330"
              src={require('./images/Personal-Finance-2.jpg')} />
          </CarouselItem>
          <CarouselItem>
            <img
              width={440}
              height={660}
              alt="220x330"
              src={require('./images/Personal-Finance-3.jpg')} />
          </CarouselItem>
          <CarouselItem>
            <img
              width={440}
              height={660}
              alt="220x330"
              src={require('./images/Personal-Finance-4.jpg')} />
          </CarouselItem>
          <CarouselItem>
            <img
              width={440}
              height={660}
              alt="220x330"
              src={require('./images/Personal-Finance-5.jpg')} />
          </CarouselItem>
        </Carousel>

        <CollapsibleContent>
          <div>
            <p>
              Autumn 2012—spring 2013
            </p>
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
            <p>
              Technology: Objective-C
            </p>
          </div>
        </CollapsibleContent>
      </section>
    );
  }
}

