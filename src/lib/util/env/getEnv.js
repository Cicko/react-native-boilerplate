/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 04.01.19
 *
 */
import { get } from 'lodash';
import env from '../../../../env.json';

/**
 * Return an environment variable.
 * @param key
 * @param std
 * @returns {*}
 */
export default function getEnv(key, std = null) {
    return get(env, key, std);
}
