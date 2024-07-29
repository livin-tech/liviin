import 'intl-pluralrules';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';

LogBox.ignoreAllLogs(true);

AppRegistry.registerComponent('AppsMobile', () => App);
