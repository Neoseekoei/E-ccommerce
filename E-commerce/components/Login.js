import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native'
import React from 'react';


const Login = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.loginHeader}>Log In</Text>
            <TouchableOpacity>
            <TextInput placeholder="Username" style={styles.input} />
            <TextInput placeholder="Password" style={styles.input} />
            </TouchableOpacity>
            <Text>
                Remember me Forgot Password
            </Text>
            <TouchableOpacity>
                <Text style={styles.loginButton}>Login</Text>
            </TouchableOpacity>

            <Text>
                Or Sign in with
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#25273e'
    },
    loginHeader: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: '',
        marginTop: 20,
        color: '#fff'

    },
    input: {
        width: 250,
        height: 35,
        backgroundColor: '#D9D9D9',
        marginTop: 6,
        textAlign: '',
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'pink',
    },
    forgotPassword: {
        textAlign: 'center',
        marginTop: 20,
    },
    loginButton: {
        textAlign: 'center',
        marginTop: 20,
        color: 'white',
        fontWeight: '700',
        fontSize: 20,
        borderRadius: 50,
        borderWidth: 1,
        width: 150,
        height: 30,
        backgroundColor: 'red',
    },
    signupText: {
        textAlign: 'center',
        marginTop: 10,
    },
});

export default Login;
