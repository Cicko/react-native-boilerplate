/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { getRegistrationId } from '../../lib/util/index';
import HomeScreen from './component/HomeScreen';

export default {
    id: getRegistrationId('Screens', 'Home'),
    component: HomeScreen,
};
