/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { Navigation } from 'react-native-navigation';
import HomeScreen from './home';

function registerScreens () {
    Navigation.registerComponent(HomeScreen.id, () => HomeScreen.component);
}

export {
    registerScreens,
}
