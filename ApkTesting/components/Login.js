import React from 'react';
import { StyleSheet, Text, View, KeyboardAvoidingView, TextInput, TouchableOpacity, Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import { CheckBox } from 'react-native-elements'



var radio_props = [
    {label: 'Remember Me', value: 1 },
];

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.navbar}>
                    <Text style={styles.buttonTextNav} onPress={() => navigate('Login')}>Login</Text>
                    <Text style={styles.donation}>Donation</Text>
                    <Text style={styles.buttonTextNav} onPress={() => navigate('Register')}>Register</Text>
                </View>

                <View style={styles.loginContainer}>
                    {/* <Image resizeMode="contain" style={styles.logo} source={require('./images/donation.jpg')} /> */}
                    {/* <Text style={{fontSize:50, justifyContent: 'center', alignItems: 'center',}}>Donation</Text> */}

                </View>

                <View style={styles.formContainer}>
                    <TextInput style={styles.input}
                        autoCapitalize="none"
                        onSubmitEditing={() => this.passwordInput.focus()}
                        autoCorrect={false}
                        keyboardType='email-address'
                        returnKeyType="next"
                        placeholder='Email or Mobile Num'
                        placeholderTextColor='black' />

                    <TextInput style={styles.input}
                        returnKeyType="go"
                        ref={(input) => this.passwordInput = input}
                        placeholder='Password'
                        placeholderTextColor='black'
                        secureTextEntry
                    />

                    <RadioForm
                        radio_props={radio_props}
                        initial={0}
                        onPress={(value) => {this.setState({value:value})}}
                    />


                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>

                    <Text>ForGet Your Password?</Text>

                    {/* <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Register')}>Create a New Account</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Donatorprofile')}>Donator Profile</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonContainer} >
                        <Text style={styles.buttonText} onPress={() => navigate('Doneeprofile')}>Donee Profile</Text>
                    </TouchableOpacity>

                    <Text>ForGet Your Password?</Text> */}
                </View>

            </KeyboardAvoidingView>

        );
    }
}



const styles = StyleSheet.create({
    navbar:{
        backgroundColor:'#7fffd4',
        padding:10,
        //paddingTop:40,

        flexDirection: 'row',
        justifyContent:'space-between'
    },
    donation:{
        fontSize:30
    },
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    loginContainer: {
        alignItems: 'center',
        //flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        position: 'absolute',
        width: 300,
        height: 100
    },

    input: {
        height: 40,
        //backgroundColor: 'rgba(225,225,225,0.2)',
        backgroundColor: '#EEF2B9',
        marginBottom: 10,
        padding: 10,
        color: 'black'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15,
        marginBottom: 15
    },
    buttonTextNav: {
        color: 'orange',
        textAlign: 'center',
        fontWeight: '700',
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    }
});
