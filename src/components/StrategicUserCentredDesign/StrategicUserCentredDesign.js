// Strategic User-Centred Design project

import React from 'react/addons';
import styles from './StrategicUserCentredDesign.less';
import withStyles from '../../decorators/withStyles';
import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class StrategicUserCentredDesign {
  render() {
    return (
      <section className="StrategicUserCentredDesign">
        <h2>Strategic User-Centred Design Project</h2>

        <CollapsibleContent>
          <div>
            <p>
              Year
              2015
            </p>
            <p>
              Challenges: very little inteaction with the client company (Länsimetro)
            </p>
            <p>
              Good stuff usability testing, ideation (444 ideas), the whole SUCD process
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
