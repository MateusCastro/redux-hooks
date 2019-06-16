import { createAppContainer, createStackNavigator } from 'react-navigation';

import Main from './pages/Main';

const Routes = createStackNavigator({
  Main,
});

export default createAppContainer(Routes);
