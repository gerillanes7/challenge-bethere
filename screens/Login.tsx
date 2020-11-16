import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';


export default function Login({ navigation }) {
    const [account, setAccount] = useState({ username: '', password: ''})
    const [error, setError] = useState(false)

    const logIn = () => {
        if ((account.username === 'bethere' || account.username === 'Bethere') && account.password === '123') {
            navigation.navigate('TasksList')
        } else {
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000);
        }
    }
    
    return (
        <View style={styles.container}>
            <View>
                <TextInput style={styles.input} placeholder="Username" onChangeText={(username) => setAccount({...account, username:username})}/>
            </View>
            <View>
                <TextInput style={styles.input} placeholder="Password" onChangeText={(password) => setAccount({...account, password:password})} secureTextEntry={true}/>
            </View>
            {
                error && 
                <View >
                    <Text style={styles.errorText}>Usuario o contrasena incorrectos</Text>
                </View>
            }
            <View>
                <Button onPress={() => logIn()} title="Log in" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 35,
      marginVertical: 100
    },
    input: {
        height: 50,
        backgroundColor: '#e8e8e8',
        marginBottom: 10,
        padding: 10,
        borderRadius: 13
    },
    errorText: {
        marginTop: 3,
        marginBottom: 10,
        color: 'red',
        textAlign: 'center'
    }
  });