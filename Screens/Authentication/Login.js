import React from "react";
import { View, Text, StyleSheet } from "react-native"
import { Button } from 'react-native-paper';

export default function Login({ navigation }) {

    return (
        <View>
            <Text>Login Screen</Text>
            <View style={styles.loginButtonSection}>
                <Button mode="outlined" onPress={()=>navigation.navigate('Home', { name: 'Deepanshu' })}>Home</Button>
                <Button mode="outlined" onPress={()=>navigation.navigate('Signup')}> Sign Up</Button>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    loginTextSection: {
        width: '100%',
        height: '30%',
     },
     loginButtonSection: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
     },
     inputText: {
        marginLeft: '20%',
        width: '60%'
     },
     loginButton: {
       backgroundColor: 'blue',
       color: 'white'
     }
    
})