import { NavigationActions } from 'react-navigation';
import { BackHandler } from 'react-native';
import RootNavigator from '../routes';

const initialState = RootNavigator.router.getStateForAction(NavigationActions.init());

const navigationReducer = (state = initialState, action) => {
  const newState = RootNavigator.router.getStateForAction(action, state);
  switch (action.type) {
    case NavigationActions.BACK:
      if (newState.routes.length === 1 && newState.routes[0].routeName === 'Login') {
        BackHandler.exitApp();
      }
      break;

    default:
      break;
  }

  return newState || state;
};

export default navigationReducer;
