/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Navigation } from 'react-native-navigation';
import { defaultOptions, getRootOptions } from './config/navigation';
import { registerScreens } from './screens';
import { Platform } from 'react-native';

if (Platform.OS === 'android') {
    alert = (title) => {
        Navigation.showOverlay({
            component: {
                name: 'navigation.playground.alert',
                passProps: {
                    title
                },
                options: {
                    overlay: {
                        interceptTouchOutside: true
                    }
                }
            }
        });
    };
}

function start() {
    registerScreens();
    Navigation.events().registerAppLaunchedListener(async () => {
        Navigation.setDefaultOptions(defaultOptions);

        // await Navigation.showModal({
        //   stack: {
        //     children: [
        //       {
        //         component: {
        //           name: 'navigation.playground.ModalScreen'
        //         }
        //       }
        //     ]
        //   }
        // });

        Navigation.setRoot(getRootOptions({}));
    });
}

export {
    start,
}
