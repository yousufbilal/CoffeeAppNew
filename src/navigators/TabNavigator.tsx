import {StyleSheet} from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import CartScreen from '../screens/CartScreen'
import FavoriteScreen from '../screens/FavoriteScreen'
import OrderHistoryScreen from '../screens/OrderHistoryScreen'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {COLORS} from '../theme/theme'
// import {TabBarIOSItem} from 'react-native'

const Tab = createBottomTabNavigator()
const {Screen, Navigator} = Tab

const TabNavigator = () => {
    return (<Navigator screenOptions={
        {
            tabBarHideOnKeyboard: true,
            headerShown: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBarStyle
        }
    }>
        <Screen name='Home'
            component={HomeScreen}/>
        <Screen name='Cart'
            component={CartScreen}/>
        <Screen name='Favorite'
            component={FavoriteScreen}/>
        <Screen name='History'
            component={OrderHistoryScreen}/>
    </Navigator>)
}

export default TabNavigator

const styles = StyleSheet.create({
    tabBarStyle: {
        height: 80,
        position: 'absolute',
        backgroundColor: COLORS.primaryBlackRGBA,
        borderTopWidth: 0,
        elevation: 0,
        borderTopColor: 'transparent'
    },
    BlurViewStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});
