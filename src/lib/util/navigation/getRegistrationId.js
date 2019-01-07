/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import getEnv from '../env/getEnv';

const APP_NAME = getEnv('APP_NAME');

/**
 * Get ID for a component
 * @param type
 * @param id
 * @returns {string}
 */
export default function getRegistrationId(type, id) {
    return `${APP_NAME}.${type}.${id}`;
}
