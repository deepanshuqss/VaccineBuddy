import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../Screens/Home/Home'
import Profile from '../Screens/Profile'
import Consultation from '../Screens/Consultation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/Fontisto'

const Tab = createBottomTabNavigator();
  
export default function Nav() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Welcome to Vaccine Buddy" component={Home}  options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
        />
        
        <Tab.Screen name="Consultation" component={Consultation}  options={{
          tabBarLabel: 'Consultation',
          tabBarIcon: ({ color, size }) => (
            <Icons name="doctor" color={color} size={size} />
          ),
        }}
        />
        
        <Tab.Screen name="Profile" component={Profile}  options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-circle" color={color} size={size} />
          ),
        }}
        />
        
      </Tab.Navigator>
    );
  }