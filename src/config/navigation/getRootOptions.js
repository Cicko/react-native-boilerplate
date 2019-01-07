/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */
import { assign } from 'lodash';

const defaultRootOptions = {
    root: {
        bottomTabs: {
            children: [{
                stack: {
                    children: [{
                        component: {
                            name: 'EasyMove.Screens.Home',
                            passProps: {
                                text: 'This is tab 1'
                            }
                        }
                    }],
                    options: {
                        bottomTab: {
                            icon: require('../../assets/img/icons/list.png'),
                            testID: 'FIRST_TAB_BAR_BUTTON'
                        }
                    }
                }
            },
                {
                    component: {
                        name: 'EasyMove.Screens.Profile',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Favourites',
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                }]
        },
    }
};

export default (options) => (assign(defaultRootOptions, options));
