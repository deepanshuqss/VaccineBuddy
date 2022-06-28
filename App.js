import Login from './Screens/Authentication/Login'
import Signup from './Screens/Authentication/Signup'
import Home from './Screens/Home/Home'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


export default function App() {
  return (
       <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Home'
          >
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ title: 'Welcome to Vaccine Buddy' }}
            />
            <Stack.Screen name="login" 
            options={{ title: 'Login Screen' }}
            component={Login} />
            <Stack.Screen name="Signup" options={{ title: 'Signup Screen' }} component={Signup} />
          </Stack.Navigator>
  </NavigationContainer>
  );
}