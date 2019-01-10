/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 10.01.19
 *
 */
import { HOME_BUTTON_CLICK } from './types';
import initialState from './state';

function home(state = initialState, action = { type: 'none'}) {
    switch(action.type) {
        case HOME_BUTTON_CLICK:
            return {
                ...state,
                buttonClicked: state.buttonClicked + 1,
            };
        default:
            return state;
    }
}

export default home;
