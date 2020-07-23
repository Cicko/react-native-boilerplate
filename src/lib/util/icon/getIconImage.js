/**
 *
 * @author Rudolf Cicko
 * @email rudolfcickodev@gmail.com
 * @date 07.01.19
 *
 */
import Icon from 'react-native-vector-icons/Ionicons';
import getIconName from './getIconName';

/**
 * Get Icon Image by icon name.
 * @param iconName
 * @returns {Promise<any>}
 */
function getIconImage(iconName) {
    return new Promise((resolve, reject) => {
        Icon.getImageSource(getIconName(iconName), 30).then((value) => {
            resolve(value);
        })
            .catch(reject);
    });
}

export default getIconImage;
