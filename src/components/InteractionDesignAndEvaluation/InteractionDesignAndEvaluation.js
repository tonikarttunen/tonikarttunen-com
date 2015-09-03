// Interaction Design and Evaluation project

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Grid, Row, Col } from 'react-bootstrap';
import styles from './InteractionDesignAndEvaluation.less';
import withStyles from '../../decorators/withStyles';
import ProjectDetailView from '../../components/ProjectDetailView';

@withStyles(styles)
export default class InteractionDesignAndEvaluation {
  render() {
    return (
      <DocumentTitle title='Aalto MyCourses Usability Evaluation — Toni Karttunen'>
        <ProjectDetailView>
          <section className="InteractionDesignAndEvaluation">
            <Grid>
              <h2>Aalto MyCourses Usability Evaluation</h2>

              <div className='WideScreenMediaContainer Figure hidden-xs'>
                <div className='WideScreenMedia ProcessDiagram'/>
              </div>

              <div className='ProcessDiagramMobile Figure visible-xs'/>

              <div className="YouTube">
                <iframe
                  width="1280"
                  height="720"
                  src="https://www.youtube.com/embed/xoz7yhGl3p8?rel=0"
                  frameBorder="0"
                  allowFullScreen
                />
              </div>

              <Row>
                <Col md={4} className="InfoBox">
                  <h3>Spring</h3>
                  <p>2015</p>
                  <h3>Client</h3>
                  <p>Aalto University Learning Services, ICT for Learning Team</p>
                </Col>
                <Col md={8}>
                  <p>
                    MyCourses is a new course portal that will replace all the earlier
                    commonly used course portals (Noppa, Moodle and Optima) at Aalto
                    University. It will be launched to all the students and teaching
                    personnel at the beginning of the 2015 autumn semester.
                  </p>
                  <p>
                    Our five-member student group evaluated the usability of the mobile
                    user interface of the MyCourses system from student’s point of view
                    and suggested improvements to it. The project was done as part of the
                    T-121.5450 Interaction Design and Evaluation course at Aalto University.

                    First, we conducted expert reviews with back-of-the-envelope action
                    analysis and usability guidelines. Then, the usability of the system
                    was evaluated with test users. In user tests, we utilized
                    visual walkthrough method with utility analysis and traditional
                    usability tests in a usability laboratory. After the user tests, we
                    created an improved prototype of the system with the Axure prototyping
                    software. Because we had discovered several major usability issues in
                    the user tests and expert reviews, we focused on fixing high-level
                    issues, such as navigation and information structure and did not focus
                    on less important issues such as visual design. After designing the
                    new prototype, we compared it with a prototype version of the MyCourses
                    system in quick usability tests.
                  </p>
                  <p>
                    With the previously described methods, we found several usability issues.
                    The most significant issue of the system was that the course pages did
                    not have consistent structure, which made finding lecture slides and other
                    important course material very difficult and slow in the user tests.
                    Performing important everyday tasks, such as accessing course information
                    and logging in required too many clicks. Moreover, the many pages required
                    large amounts of scrolling to find the necessary information. The home page
                    of the website was cluttered with lots of (almost) useless information and
                    did not contain quick access to information that the users needed frequently.
                    Due to the deeply nested structure and confusing naming conventions of the
                    forums, it was difficult for our test users to figure out how to use the
                    forum functionality of the system. We also noticed that the system also had
                    some smaller mobile usage specific issues, such as too small touch targets.
                  </p>
                  <p>
                    We asked our test users to fill in a standard System Usability Scale (SUS)
                    questionnaire in our usability tests. Our improved prototype received a much
                    higher average SUS score than the prototype of the original MyCourses system.
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
