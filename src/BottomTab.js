import React from "react";
import Icon from "react-native-vector-icons/MaterialIcons";
import HomeScreen from "./components/HomeScreen";
import SettingsScreen from "./components/SettingsScreen";
import ProfileScreen from "./components/ProfileScreen";


const Tab = createBottomTabNavigator();

export const BottomTab =() => {
    return (
            <Tab.Navigator
                screenOptions = {({route}) => ({
                    tabBarIcon: ({focused}) => {
                        let iconName = '';
                        switch (route.name) {
                            case 'Home':
                            iconName = focused ? 'home': 'home';
                            break;
                            case 'Settings':
                            iconName = focused ? 'settings': 'settings';
                            break;
                            case 'Profile':
                            iconName =focused ? 'supervised-user-circle' :'supervised-user-circle' ;
                            break;
                        }
                        return <Icon name= {iconName} size={20} />
                    }

                })}
            >
                <Tab.Screen  name='Home' component={HomeScreen}/>
                <Tab.Screen  name='Settings' component={SettingsScreen}/>
                <Tab.Screen  name='Profile' component={ProfileScreen}/>
            </Tab.Navigator>
    );
}