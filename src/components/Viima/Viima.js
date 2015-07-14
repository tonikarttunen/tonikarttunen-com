// Viima

import React from 'react/addons';
import { Grid } from 'react-bootstrap';
import styles from './Viima.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class Viima {
  render() {
    return (
      <section className="Viima">
        <Grid>
          <h2>Viima Mobile User Interface</h2>
          <CollapsibleContent>
            <div>
              <p>
                Autumn 2014—spring 2015
              </p>
              <p>
                Challenges: web UI only tailored for large screens,
                difficult to handle it on tiny mobile screens;
                had to redesign the UI from scratch
              </p>
              <p>
                Good stuff: usability testing,
                Accenture quality award finalist,
                "ammattimainen ote tekemiseen" ja Scumin käyttö
              </p>
              <p>
                Team members
              </p>
            </div>
          </CollapsibleContent>
        </Grid>
      </section>
    );
  }
}
