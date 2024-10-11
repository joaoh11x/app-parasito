import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import IonIcons from 'react-native-vector-icons/Ionicons';

//Telas
import HomeScreen from '../app/screens/HomeScreen';
import GameScreen from '../app/screens/GameScreen';
import InfoNavigation from '../app/screens/InfoScreens/InfoNavigation';
import SettingsScreen from '../app/screens/SettingsScreen';

// Nomes de Telas
const homeName = 'Início';
const gameName = 'Quiz';
const fInfo = 'Estudos';


const Tab = createBottomTabNavigator();

export default function MainContainer() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let rn = route.name;

                        if (rn === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                        } else if (rn === gameName) {
                            iconName = focused ? 'game-controller' : 'game-controller-outline';
                        } else if (rn === fInfo) {
                            iconName = focused ? 'book' : 'book-outline';
                        }

                        return <IonIcons name={iconName} size={size} color={color} />
                    },

                    tabBarActiveTintColor: '#f29031',
                    tabBarInactiveTintColor: 'grey',
                    tabBarLabelStyle: {
                        paddingBottom: 10,
                        fontSize: 10
                    },
                    tabBarStyle: {
                        display: 'flex',
                        height: 70,
                        padding: 10
                    }
                })}
            >

                <Tab.Screen name={homeName} component={HomeScreen} />
                <Tab.Screen name={fInfo} component={InfoNavigation} />
                <Tab.Screen name={gameName} component={GameScreen} options={{ headerShown: false }} />
                {/*<Tab.Screen name={settingsName} component={SettingsScreen} />*/}

            </Tab.Navigator>
        </NavigationContainer>
    );
}