import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BackHandler } from 'react-native';
import { createReduxBoundAddListener, createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers';
import { addNavigationHelpers, NavigationActions, NavigationProp } from 'react-navigation';

import RootNavigator from './routes';

export const navMiddleware = createReactNavigationReduxMiddleware(
  'root',
  state => state.nav,
);

const addListener = createReduxBoundAddListener('root');

class Navigation extends Component {
  static propTypes = {
    ...NavigationProp,
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBackPress);
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress');
  }

  onBackPress = () => {
    const { dispatch } = this.props;
    dispatch(NavigationActions.back());
    return true;
  };

  render() {
    const { nav, dispatch } = this.props;
    return (
      <RootNavigator navigation={addNavigationHelpers({ addListener, dispatch, state: nav })} />
    );
  }
}

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(Navigation);
