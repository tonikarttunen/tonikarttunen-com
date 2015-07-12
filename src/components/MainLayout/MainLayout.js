// Main
// This is a top-level controller-view in Flux architecture

import React, { PropTypes } from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import Home from '../../components/Home';

export default class MainLayout {
  static propTypes = {
    children: PropTypes.object
  };

  render() {
    return (
      <DocumentTitle title="Toni Karttunen">
        <div className="MainLayout">
          <header>
            <nav className="navbar navbar-default navbar-fixed-top">
              <div className="container">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="main-menu-mobile-toggle-text">Menu</span>
                  </button>
                  <Link to="/" className="navbar-brand">Toni Karttunen</Link>
                </div>

                <div className="collapse navbar-collapse" id="main-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="projects">Projects</Link></li>
                    <li><Link to="about">About</Link></li>
                  </ul>
                </div>
              </div>
            </nav>
          </header>
          {this.props.children || <Home/>}
        </div>
      </DocumentTitle>
    );
  }
}
