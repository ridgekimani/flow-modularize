import { StackNavigator } from 'react-navigation';
import LoginScreen from '../../scenes/Login';
import HomeScreen from '../../scenes/Home';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
  },
  Home: {
    screen: HomeScreen,
  },
}, { headerMode: 'none' });

export default RootNavigator;
