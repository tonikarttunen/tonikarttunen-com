// DiagonalDivider

import React, { PropTypes } from 'react/addons'; // eslint-disable-line no-unused-vars
import styles from './DiagonalDivider.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class DiagonalDivider extends React.Component {
  static propTypes = {
    id: React.PropTypes.string,
    color: React.PropTypes.string
  };

  componentDidMount() {
    let canvas = document.getElementById(this.props.id);

    // Check if the <canvas> element exists and the browser supports <canvas>
    if (canvas && canvas.getContext) {
      let context = canvas.getContext('2d');

      // Make canvas drawings look sharp on high-density ("Retina") screens
      if ('devicePixelRatio' in window) {
        if (window.devicePixelRatio > 1) {
          const devicePixelRatio = window.devicePixelRatio;
          canvas.width = canvas.width * devicePixelRatio;
          canvas.height = canvas.height * devicePixelRatio;

          // Update context for the new device pixel ratio
          context = canvas.getContext('2d');
        }
      }

      context.strokeStyle = this.props.color;
      context.lineWidth = 2;
      context.moveTo(1, 61);
      context.lineTo(13, 1);
      context.stroke();
    }
  }

  render() {
    return (
      <canvas id={this.props.id} className='DiagonalDivider' width='14' height='62'>
      </canvas>
    );
  }
}
