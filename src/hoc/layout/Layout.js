import React, { Component } from 'react';
import Aux from '../Aux';
import classes from './Layout.css';
import Toolbar from '../../components//Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';



class Layout extends Component {

  state = {
    showSideDrawer: false
  }

  sideDrawerClosedHandler = () => {
    this.setState({showSideDrawer: false});
  }

  toggleSideDrawerHandler = () => {
    console.log('click')
    this.setState((prevState) => ({
     showSideDrawer: !prevState.showSideDrawer
    }))
  }

  render() {

    const { showSideDrawer } = this.state

    return(

      <Aux>
        <Toolbar isSideDrawerOpen={showSideDrawer} toggleSideDrawer={this.toggleSideDrawerHandler} />
        <SideDrawer isOpen={showSideDrawer} handleClose={this.sideDrawerClosedHandler}/>
        <div>Toolbar, SideDrawer, Backdrop</div>
        <main className={classes.Content}>
          {this.props.children}
        </main>
      </Aux>
    )
  }
}

export default Layout;
