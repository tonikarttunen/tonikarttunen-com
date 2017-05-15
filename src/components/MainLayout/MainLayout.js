// Main
// This is a top-level controller-view in Flux architecture

import React, { PropTypes } from 'react/addons';
import DocumentTitle from 'react-document-title';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Menu from '../../components/Menu';
import MenuStore from '../../stores/MenuStore';
import styles from './MainLayout.less';
import withStyles from '../../decorators/withStyles';

function getMenuState() {
  return {
    isOpen: MenuStore.isOpen(),
    menuItems: MenuStore.getMenuItems()
  };
}

@withStyles(styles)
export default class MainLayout extends React.Component {
  static propTypes = {
    children: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = getMenuState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    MenuStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    MenuStore.addChangeListener(this.onChange);
  }

  onChange() {
    this.setState(getMenuState()); // eslint-disable-line react/no-set-state
  }

  render() {
    return (
      <DocumentTitle title="Toni Karttunen">
        {
          (() => {
            if (!!this.props.children) {
              return (
                <div className="MainLayout">
                  <Header isOpen={this.state.isOpen} menuItems={this.state.menuItems}/>
                  <Menu isOpen={this.state.isOpen} menuItems={this.state.menuItems}/>
                  {this.props.children}
                  <Footer/>
                </div>
              )
            }
            return (
              <div>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h1>Toni Karttunen</h1>
                      <p style={{ color: '#a7a7a7' }}>
                        UX Designer &amp; Software Developer at RND Works Oy / Haave Oy
                      </p>
                      <p>
                        <a href="https://www.linkedin.com/in/tonikarttunen/">LinkedIn</a><br/>
                        <a href="https://www.twitter.com/tonikarttunen/">Twitter</a><br/>
                        <a href="mailto:toni.antero.karttunen@gmail.com">Email</a><br/>
                        <a href="https://www.github.com/tonikarttunen/">GitHub</a><br/>
                        <a href="https://www.instagram.com/tonikarttunen/">Instagram</a>
                      </p>
                      <p className="text-muted" style={{ fontSize: 10 }}>
                        &copy; Toni Karttunen. <Link to="/portfolio" className="text-muted" style={{ color: '#a7a7a7', fontSize: 10, textDecoration: 'underline' }}>Old portfolio (2011–2015)</Link>
                      </p>
                    </Col>
                  </Row>
                </Grid>
              </div>
            )
          })()
        }
      </DocumentTitle>
    );
  }
}
