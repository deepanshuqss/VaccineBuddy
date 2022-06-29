import Login from './Screens/Authentication/Login'
import Signup from './Screens/Authentication/Signup'
import Package from './Screens/Package';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nav from './Navigation/Nav'

const Stack = createNativeStackNavigator();


export default function App() {
  return (
       <NavigationContainer>
          <Stack.Navigator
          initialRouteName='Home'
          >
            <Stack.Screen
              name="Home"
              component={Nav}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="login" 
            options={{ title: 'Login Screen' }}
            component={Login} />
            <Stack.Screen name="Signup" options={{ title: 'Signup Screen' }} component={Signup} />
            <Stack.Screen name="Package" options={{ title: 'Packages'}} component={Package}/>
          </Stack.Navigator>
  </NavigationContainer>
  );
}