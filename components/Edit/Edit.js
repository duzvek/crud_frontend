import { useState } from "react";
import { View, Button, Text, StatusBar, TextInput, ToastAndroid, TouchableOpacity } from "react-native";

import Inputs from "../Inputs/Inputs";
import { BTN } from '../Global'

const Edit = ({ navigation, route }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [confirm, setConfirm] = useState('')

    const check = () => {
        if (user && pass && confirm && pass == confirm) {
            
        }
        else {
            ToastAndroid.show('Check the inputs especially the password matching!', ToastAndroid.SHORT)
        }
    }

    return (
        <View style={{ backgroundColor: '#242B2E', flex: 1, alignItems: "center", paddingHorizontal: '9%' }}>
            <StatusBar hidden={false} />
            <View style={{ marginBottom: 100 }} />
            <Text style={{ fontSize: 25, fontWeight: 700, color: '#FFFFFF' }}>Edit Profile</Text>
            <View style={{ marginBottom: 100 }} />
            <Inputs type={'user'} placeholder={'Enter Username'} iconColor={'#4E5457'} textState={user} setState={setUser}/>
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Enter Password'} iconColor={'#4E5457'} textState={pass} setState={setPass}/>
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Confirm Password'} iconColor={'#009BDE'} textState={confirm} setState={setConfirm}/>
            <View style={{ marginBottom: 50 }} />
            <BTN title={'Save Edit'} func={check}/>
        </View>
    )
}


export default Edit