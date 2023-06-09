import { useEffect, useState } from "react";
import { View, Button, Text, StatusBar, TextInput, ToastAndroid, TouchableOpacity } from "react-native";

import Inputs from "../Inputs/Inputs";
import { BTN } from '../Global'
import axios from "axios";

const Edit = ({ navigation, route }) => {

    const [user, setUser] = useState('')
    const [pass, setPass] = useState('')
    const [confirm, setConfirm] = useState('')


    useEffect(() => {
        setUser(route.params.username)
    }, [])

    const check = async () => {
        if (user && pass && confirm && pass == confirm) {
            await axios.put('https://8260-49-149-68-98.ngrok-free.app/' + 'api/2/update', {
                id: route.params.id,
                username: user,
                password: confirm
            })
                .then((response) => {
                    if (response.data.flag === 1) {
                        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
                        navigation.navigate('Profile', { id: route.params.id })
                    }
                    else {
                        ToastAndroid.show(response.data.message, ToastAndroid.SHORT)
                    }
                })
                .catch(() => {
                    ToastAndroid.show("Server is not available!", ToastAndroid.SHORT)
                })
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
            <Inputs type={'user'} placeholder={'Enter Username'} iconColor={'#4E5457'} textState={user} setTextState={setUser} />
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Enter Password'} iconColor={'#4E5457'} textState={pass} setTextState={setPass} />
            <View style={{ marginBottom: 15 }} />
            <Inputs type={'pass'} placeholder={'Confirm Password'} iconColor={'#009BDE'} textState={confirm} setTextState={setConfirm} />
            <View style={{ marginBottom: 50 }} />
            <BTN title={'Save Edit'} func={check} />
        </View>
    )
}


export default Edit