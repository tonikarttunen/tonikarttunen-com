// Projects

import React from 'react/addons';
import { Grid } from 'react-bootstrap';
import DocumentTitle from 'react-document-title';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';
import Viima from '../../components/Viima';
import InteractionDesignAndEvaluation from '../../components/InteractionDesignAndEvaluation';
import StrategicUserCentredDesign from '../../components/StrategicUserCentredDesign';
import HelsinkiGraph from '../../components/HelsinkiGraph';
import LocationAwareApp from '../../components/LocationAwareApp';
import PersonalFinance from '../../components/PersonalFinance';
import LondonTravelGuide from '../../components/LondonTravelGuide';

@withStyles(styles)
export default class Projects {
  render() {
    return (
      <DocumentTitle title='Projects - Toni Karttunen'>
        <article className='Projects'>
          <Grid>
            <h1>Projects</h1>
          </Grid>
          <Viima/>
          <InteractionDesignAndEvaluation/>
          <StrategicUserCentredDesign/>
          <HelsinkiGraph/>
          <LocationAwareApp/>
          <PersonalFinance/>
          <LondonTravelGuide/>
        </article>
      </DocumentTitle>
    );
  }
}
