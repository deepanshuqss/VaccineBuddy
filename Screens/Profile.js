import React from "react";
import { View, Text} from "react-native"
import { Button } from 'react-native-paper';

const Profile = ({ navigation }) =>{

    return (
        <View>
            <Text>Profile Screen</Text>
            <View>
                <Button mode="outlined" onPress={()=>navigation.navigate('login')}>Login</Button>
                <Button mode="outlined" onPress={()=>navigation.navigate('Signup')}> Sign Up</Button>
            </View>
        </View>
    );

}

export default Profile;