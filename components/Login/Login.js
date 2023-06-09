import React, { useState } from "react";
import { View, Text, StatusBar, ToastAndroid, TouchableOpacity } from "react-native";

import Inputs from "../Inputs/Inputs";
import { BTN } from '../Global'
import axios from "axios";

const Login = ({ navigation, route }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const check = async () => {
        if (user && pass) {
            await axios.post('https://8260-49-149-68-98.ngrok-free.app/' + `api/2/login/`, {
                username: user,
                password: pass
            })
                .then((response) => {
                    ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
                    if (response.data.flag === 1) {
                        setUser(''); setPass('')
                        navigation.navigate('Profile', { id: response.data.id })
                    }
                })
                .catch(() => {
                    ToastAndroid.show("Server is not available!", ToastAndroid.SHORT)
                })
        }
        else {
            ToastAndroid.show('Missing Input!', ToastAndroid.SHORT)
        }
    }

    return (
        <View style={{ backgroundColor: '#242B2E', flex: 1, alignItems: "center", paddingHorizontal: '9%' }}>
            <StatusBar hidden={false} />
            <View style={{ marginBottom: 100 }} />
            <Text style={{ fontSize: 25, fontWeight: 700, color: '#FFFFFF' }}>Login Page</Text>
            <View style={{ marginBottom: 100 }} />
            <Inputs type={'user'} placeholder={'Enter Username'} iconColor={'#4E5457'} textState={user} setTextState={setUser} />
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Enter Password'} iconColor={'#CF7575'} textState={pass} setTextState={setPass} />
            <View style={{ marginBottom: 50 }} />
            <BTN title={'Log in'} func={check} />
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ fontSize: 15, color: '#D8D8D8', fontWeight: 500 }}>No Account? create </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                    <Text style={{ fontSize: 15, color: '#009BDE', fontWeight: 500 }}>here</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Login