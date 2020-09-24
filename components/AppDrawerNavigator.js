import * as React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import { AppTabNavigator } from './AppTabNavigator';
import CustomSideBarMenu from './CustomSideBarMenu';
import {Image} from 'react-native'; 

export const AppDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: AppTabNavigator,
        navigationOptions: {
            title: 'HOME ACTIVITY',
        },
        headerStyle: {
            background: "red"
        }
}
},
{
    contentComponent: CustomSideBarMenu
},
{
    initialRouteName: "Home ",
}
)