// Projects

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';

import CollapsibleContent from '../../components/CollapsibleContent';

@withStyles(styles)
export default class Projects {
  render() {
    return (
      <DocumentTitle title="Projects - Toni Karttunen">
        <section className="Projects container">
          <h1>Projects</h1>

          <h2>Viima Mobile UI</h2>
          <div>
            <CollapsibleContent>
              <div>
                <h3>Hello world</h3>
                <p>
                  Years
                  2014—2015
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
          </div>

          <h2>Interaction Design and Evaluation Project</h2>
          <div>
            <CollapsibleContent>
              <div>
                <h3>Hello world</h3>
                <p>
                  Year
                  2015
                </p>
                <p>
                  Challenges: bad mobile UI, lack of information architecture
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
          </div>

          <h2>Strategic User-Centered Design Project</h2>
          <div>
            <CollapsibleContent>
              <div>
                <h3>Hello world</h3>
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
          </div>
        </section>
      </DocumentTitle>
    );
  }
}
