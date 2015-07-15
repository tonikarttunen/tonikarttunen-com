// Interaction Design and Evaluation project

import React from 'react/addons';
import { Grid } from 'react-bootstrap';
import styles from './InteractionDesignAndEvaluation.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class InteractionDesignAndEvaluation {
  render() {
    return (
      <section className="InteractionDesignAndEvaluation">
        <Grid>
          <h2>Interaction Design and Evaluation Project</h2>

          <div className="youtube">
            <iframe
              width="1280"
              height="720"
              src="https://www.youtube.com/embed/xoz7yhGl3p8?rel=0"
              frameBorder="0"
              allowFullScreen>
            </iframe>
          </div>

          <CollapsibleContent>
            <div>
              <p>
                Spring
                2015
              </p>
              <p>
                Client
                Aalto University Learning Services, ICT for Learning Team
              </p>
              <p>
                Challenges: bad mobile UI, lack of structure and broken information architecture
              </p>
              <p>
                Good stuff: usability testing, getting to know how to record mobile devices
                in usability tests
                SUS scores
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
