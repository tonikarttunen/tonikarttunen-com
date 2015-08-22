// Main
// This is a top-level controller-view in Flux architecture

import React, { PropTypes } from 'react/addons';
import DocumentTitle from 'react-document-title';
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
    this.setState(getMenuState());
  }

  render() {
    return (
      <DocumentTitle title="Toni Karttunen">
        <div className="MainLayout">
          <Header isOpen={this.state.isOpen} menuItems={this.state.menuItems}/>
          <Menu isOpen={this.state.isOpen} menuItems={this.state.menuItems}/>
          {this.props.children || <Home/>}
          <Footer/>
        </div>
      </DocumentTitle>
    );
  }
}
