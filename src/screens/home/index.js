/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 04.01.19
 *
 */
import { getRegistrationId } from '../../lib/util/index';
import HomeScreen from './component/HomeScreen';

export default {
    id: getRegistrationId('Screens', 'Home'),
    component: HomeScreen,
};
