/**
 *
 * @author Rudolf Cicko
 * @email rudolf.cicko@wtl.de
 * @date 07.01.19
 *
 */

export default {
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
                            text: 'Tab 1',
                            //icon: require('../images/one.png'),
                            testID: 'FIRST_TAB_BAR_BUTTON'
                        }
                    }
                }
            },
                {
                    component: {
                        name: 'EasyMove.Screens.Home',
                        passProps: {
                            text: 'This is tab 2'
                        },
                        options: {
                            bottomTab: {
                                text: 'Tab 2',
                                //icon: require('../images/two.png'),
                                testID: 'SECOND_TAB_BAR_BUTTON'
                            }
                        }
                    }
                }]
        },
    }
}
