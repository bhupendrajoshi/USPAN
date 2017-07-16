import { StackNavigator } from 'react-navigation';
import Home from './screens/home/home'
import Buyers from './screens/buyers/buyers'
import Manufacturers from './screens/manufacturers/manufacturers'

const App = StackNavigator({
  Home: { screen: Home },
  Buyers: { screen: Buyers },
  Manufacturers: { screen: Manufacturers },
});

export default App;
