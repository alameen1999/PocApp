/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Navigators from './src/navigators/Navigators';

AppRegistry.registerComponent(appName, () => Navigators);
