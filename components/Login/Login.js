import { useState } from "react";
import { View, Button, Text, StatusBar, TextInput, ToastAndroid, TouchableOpacity } from "react-native";

import Inputs from "../Inputs/Inputs";
import { BTN } from '../Global'

const Login = ({ navigation, route }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')

    const check = () => {

    }

    return (
        <View style={{ backgroundColor: '#242B2E', flex: 1, alignItems: "center", paddingHorizontal: '9%' }}>
            <StatusBar hidden={false} />
            <View style={{ marginBottom: 100 }} />
            <Text style={{ fontSize: 25, fontWeight: 700, color: '#FFFFFF' }}>Login Page</Text>
            <View style={{ marginBottom: 100 }} />
            <Inputs type={'user'} placeholder={'Enter Username'} iconColor={'#4E5457'} textState={user} setState={setUser}/>
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Enter Password'} iconColor={'#CF7575'} textState={pass} setState={setPass}/>
            <View style={{ marginBottom: 50 }} />
            <BTN title={'Log in'} func={check}/>
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