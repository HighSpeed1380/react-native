import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../colors';

// Icon Providers
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Home from '../views/screens/Home/Home';
import DirectMessages from '../views/screens/DirectMessages/DirectMessages';
import RequestServiceForm from '../views/screens/RequestServiceForm/RequestServiceForm';
import ManageOrders from '../views/screens/ManageOrders/ManageOrders';
import Profile from '../views/screens/Profile/Profile';
import Title from '../views/components/Title/Title';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

export default function UserStack() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarActiveTintColor: Colors.primary,
                    tabBarShowLabel: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="home" size={22} color={focused ? Colors.primary : "black"} />
                    ),
                }} />
            <Tab.Screen
                name="Direct Messages"
                component={DirectMessages}
                options={{
                    tabBarActiveTintColor: Colors.primary,
                    headerStyle: {
                        shadowColor: 'transparent', // this covers iOS
                        elevation: 0, // this covers Android
                      },
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarLabel: 'Direct Messages',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="message-square" size={22} color={focused ? Colors.primary : "black"} />
                    ),
                    headerTitle: () => (
                        <Title>الرسائل</Title>
                    ),
                }}
            />
            <Tab.Screen
                name="Request Service Form"
                component={RequestServiceForm}
                options={{
                    tabBarActiveTintColor: Colors.primary,
                    headerStyle: {
                        shadowColor: 'transparent', // this covers iOS
                        elevation: 0, // this covers Android
                      },
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarLabel: 'Request Service Form',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons name="add-circle-outline" size={27} color={focused ? Colors.primary : "black"} />
                    ),
                    headerTitle: () => (
                        <Title>رفع طلب خدمة</Title>
                    ),
                }}
            />
            <Tab.Screen
                name="Manage Orders"
                component={ManageOrders}
                options={{
                    tabBarActiveTintColor: Colors.primary,
                    headerStyle: {
                        shadowColor: 'transparent', // this covers iOS
                        elevation: 0, // this covers Android
                      },
                    headerShown: true,
                    tabBarShowLabel: false,
                    tabBarLabel: 'Manage Orders',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="clipboard" size={22} color={focused ? Colors.primary : "black"} />
                    ),
                    headerTitle: () => (
                        <Title>متابعة الطلبات</Title>
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarActiveTintColor: Colors.primary,
                    tabBarShowLabel: false,
                    headerStyle: {
                        shadowColor: 'transparent', // this covers iOS
                        elevation: 0, // this covers Android
                      },
                    headerShown: true,
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color, size, focused }) => (
                        <Feather name="user" size={22} color={focused ? Colors.primary : "black"} />
                    ),
                    headerTitle: () => (
                        <Title>حسابي</Title>
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
