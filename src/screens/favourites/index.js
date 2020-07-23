/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 07.01.19
 *
 */
import { getRegistrationId } from '../../lib/util/index';
import FavouritesScreen from './component/FavouritesScreen';

export default {
    id: getRegistrationId('Screens', 'Favourites'),
    component: FavouritesScreen,
};
