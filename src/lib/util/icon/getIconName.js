/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */

import { Platform } from 'react-native';

/**
 * Get Icon name
 * @param baseName
 * @returns {string}
 */
function getIconName(baseName) {
    return `${Platform.OS === 'ios' ? 'ios-' : 'md-'}${baseName}`;
}

export default getIconName;
