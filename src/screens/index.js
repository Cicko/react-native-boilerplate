/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { Navigation } from 'react-native-navigation';
import HomeScreen from './home';
import ProfileScreen from './profile';

function registerScreens () {
    Navigation.registerComponent(HomeScreen.id, () => HomeScreen.component);
    Navigation.registerComponent(ProfileScreen.id, () => ProfileScreen.component);
}

export {
    registerScreens,
}
