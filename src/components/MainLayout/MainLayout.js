// Main
// This is a top-level controller-view in Flux architecture

import React, { PropTypes } from 'react/addons';
import DocumentTitle from 'react-document-title';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import styles from './MainLayout.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
export default class MainLayout {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <DocumentTitle title="Toni Karttunen">
        <div className="MainLayout">
          <Header/>
          {this.props.children || <Home/>}
          <Footer/>
        </div>
      </DocumentTitle>
    );
  }
}
