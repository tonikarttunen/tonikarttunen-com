// Projects

import React from 'react/addons';
import DocumentTitle from 'react-document-title';
import styles from './Projects.less';
import withStyles from '../../decorators/withStyles';
import Viima from '../../components/Viima';
import InteractionDesignAndEvaluation from '../../components/InteractionDesignAndEvaluation';
import StrategicUserCentredDesign from '../../components/StrategicUserCentredDesign';
import HelsinkiGraph from '../../components/HelsinkiGraph';

@withStyles(styles)
export default class Projects {
  render() {
    return (
      <DocumentTitle title="Projects - Toni Karttunen">
        <div className="Projects container">
          <h1>Projects</h1>
          <Viima/>
          <InteractionDesignAndEvaluation/>
          <StrategicUserCentredDesign/>
          <HelsinkiGraph/>
        </div>
      </DocumentTitle>
    );
  }
}
