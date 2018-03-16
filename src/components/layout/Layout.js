import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';



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
