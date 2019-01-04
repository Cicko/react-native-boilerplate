/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { get } from 'lodash';
import env from '../../../.env.json';

/**
 * Returns a environment variable
 *
 * @param {String} key : String : The env key
 * @param {any} std : * : The standard value
 * @return {String|null} : The env key
 */
export default function getEnv(key, std = null) {
    return get(env, key, std);
}
