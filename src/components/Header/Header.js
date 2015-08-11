// Header

import React from 'react/addons';
import { Link } from 'react-router';
import { Grid } from 'react-bootstrap';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import MenuToggle from '../../components/MenuToggle';
import LargeScreenMenu from '../../components/LargeScreenMenu';
import MenuActions from '../../actions/MenuActions';

@withStyles(styles)
export default class Header extends React.Component {
  static propTypes = {
    isOpen: React.PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.defaultProps = {
      isOpen: false
    };
  }

  openMenu() {
    MenuActions.openMenu(true);
  }

  closeMenu() {
    MenuActions.openMenu(false);
  }

  render() {
    return (
      <header className='Header'>
        <nav className='NavigationBar' role='navigation'>
          <Grid>
            <div className='NavigationBarLeft'>
              <Link to='/' className='LogoContainer' onClick={() => { this.closeMenu(); }}>
                <span className='Logo'/>Toni Karttunen
              </Link>
            </div>
            <div className='NavigationBarRight'>
              <div className='NavigationBarRightContainer'>
                <MenuToggle isOpen={this.props.isOpen}/>
                <LargeScreenMenu/>
              </div>
            </div>
          </Grid>
        </nav>
      </header>
    );
  }
}
