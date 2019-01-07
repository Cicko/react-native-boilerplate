/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */
import { getRegistrationId } from '../../lib/util/index';
import ProfileScreen from './component/ProfileScreen';

export default {
    id: getRegistrationId('Screens', 'Profile'),
    component: ProfileScreen,
};
