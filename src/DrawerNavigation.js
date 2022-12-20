import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ProfileScreen from "./ScreensDraw/ProfileScreen";
import SettingsScreen from "./ScreensDraw/SettingsScreen";

const Drawer = createDrawerNavigator()

export function DrawerNavigation(){
    return(
        <Drawer.Navigator>
            <Drawer.Screen name="ProfileScreen" component =  {ProfileScreen}/>
            <Drawer.Screen name="SettingsScreen" component= {SettingsScreen}/>
        </Drawer.Navigator>

    )
}