/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import getEnv from '../getEnv';

const APP_NAME = getEnv('APP_NAME');

/**
 * This method returns the registration name in the Navigation.
 * The type must be unique.
 *
 * @param {String} type : String : The type in the navigation e.g. "Screens"
 * @param {String} id : String : The unique id in the navigation e.g. "screens.test"
 * @returns {string} : The name spaced name
 *
 */
export default function getRegistrationId(type, id) {
    return `${APP_NAME}.${type}.${id}`;
}
