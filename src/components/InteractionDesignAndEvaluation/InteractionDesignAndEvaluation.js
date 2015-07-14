// Interaction Design and Evaluation project

import React from 'react/addons';
import styles from './InteractionDesignAndEvaluation.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class InteractionDesignAndEvaluation {
  render() {
    return (
      <section className="InteractionDesignAndEvaluation">
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
              Year
              2015
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
      </section>
    );
  }
}
