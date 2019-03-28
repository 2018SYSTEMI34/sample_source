import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import UpdateScreen from '../screens/UpdateScreen';

/**
 * ホーム画面の読み込み
 */
const HomeStack = createStackNavigator({
  Update: UpdateScreen,
  Home: HomeScreen
},{
  initialRouteName: 'Home',
  mode:'card'
});

HomeStack.navigationOptions = {
  tabBarLabel: 'ホーム',
};

/**
 * 登録画面の読み込み
 */
const RegisrationStack = createStackNavigator({
  Settings: RegistrationScreen,
});

RegisrationStack.navigationOptions = {
  tabBarLabel: '登録',
};

/**
 * Tab Navigation 管理部品
 */
export default createBottomTabNavigator({
  HomeStack,
  RegisrationStack,
},{
  initialRouteName: 'HomeStack'
});
